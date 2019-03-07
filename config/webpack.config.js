import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import marked from 'marked';

const renderer = new marked.Renderer();

module.exports = {
    devtool: 'inline-cheap-module-source-map',
    entry: {},
    output: {
        filename: 'assets/scripts/[name].min.js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            demo: path.resolve('demo/'),
            '@': path.resolve('src/'),
            assets: path.resolve('src/assets')
        }
    },
    performance: {
        hints: false
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
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|gif|svg)(\?v=\d+\.\d+\.\d+)$/,
                loader: 'image-webpack-loader',
                enforce: 'pre'
            },
            {
                test: /\.(png|jp(e*)g|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            fallback: 'file-loader?name=assets/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'highlight-loader'
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            renderer
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'demo/app/index.html',
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
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            JQuery: 'jquery',
            jQuery: 'jquery'
        }),

        new VueLoaderPlugin()
    ]
};
