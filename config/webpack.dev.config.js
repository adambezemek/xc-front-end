import webpack from 'webpack';
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
        includePaths: [
            'src/',
            'node_modules/'
        ]
    }
};

config.mode = 'development';

config.entry.app.unshift('webpack-hot-middleware/client?reload=true');

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
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;