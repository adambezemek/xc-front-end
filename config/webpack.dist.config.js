import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import globImporter from 'node-sass-glob-importer';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import config from './webpack.config';

const cssLoader = {
    loader: 'css-loader',
    options: {
        url: true
    }
};

const sassLoader = {
    loader: 'sass-loader',
    options: {
        importer: globImporter(),
        includePaths: [
            'src/',
            'node_modules/'
        ]
    }
};

config.mode = 'production';

config.module.rules = config.module.rules.concat([
    {
        test: /\.(css|scss)$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            cssLoader,
            'postcss-loader',
            sassLoader
        ]
    }
]);

config.devtool = '#source-map';

config.optimization = {
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            vendor: {
                name: 'vendor',
                test: /[\\/]node_modules[\\/]/
            }
        }
    },
    minimizer: [
        new UglifyJsPlugin({
            sourceMap: true,
            extractComments: true,
            uglifyOptions: {
                warnings: false,
                mangle: {
                    reserved: ['$super', '$', 'jQuery', 'JQuery', 'exports', 'require']
                }
            }
        })
    ]
};

config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),

    new MiniCssExtractPlugin({
        filename: 'assets/styles/main.min.css'
    })
]);

module.exports = config;
