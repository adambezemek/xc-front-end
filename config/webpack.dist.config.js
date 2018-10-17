import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import globImporter from 'node-sass-glob-importer';
import config from './webpack.config';

const cssLoader = {
    loader: 'css-loader',
    options: {
        url: true
    }
}

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

config.mode = "production";

config.entry.main = [
    path.resolve(__dirname, '../src/index.js')
];

config.module.rules = config.module.rules.concat([
    {
        test: /\.(css|scss)$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            cssLoader,
            'postcss-loader',
            sassLoader
        ],
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
    }
}

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