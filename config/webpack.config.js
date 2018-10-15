import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

module.exports = {
    devtool: 'inline-cheap-module-source-map',
    entry: {},
    output: {
        filename: 'assets/scripts/main.min.js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            demo: path.resolve('demo/'),
            '@': path.resolve('src/'),
            assets: path.resolve('src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(js)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jp(e*)g|gif|svg)$/,
                loader: 'image-webpack-loader',
                enforce: 'pre'
            },
            {
                test: /\.(png|jp(e*)g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            fallback: 'file-loader?name=assets/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body',
            hash: true
        }),

        new StyleLintPlugin({
            configFile: '.stylelintrc.json',
            failOnError: false,
            quiet: false
        }),
        
        new webpack.LoaderOptionsPlugin({
            eslint: {
                failOnWarning: false,
                failOnError: true
            }
        })
    ]
}