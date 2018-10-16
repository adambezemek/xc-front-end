import webpack from 'webpack';
import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import globImporter from 'node-sass-glob-importer';
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

config.mode = 'development';

config.entry.app = [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, '../demo/index.js')
];

config.module.rules = config.module.rules.concat([
    {
        test: /\.css$/,
        loader: cssLoader
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            cssLoader,
            sassLoader
        ]
    }
]);

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
]);

module.exports = config;