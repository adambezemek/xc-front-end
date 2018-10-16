import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
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

config.entry.app = [
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
    }),

    new webpack.LoaderOptionsPlugin({
        minimize: true,
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
        compress: {
            warnings: false
        },
        mangle: {
            except: ['$super', '$', 'exports', 'require']
        },
        options: {
            postcss: [autoprefixer]
        }
    })
]);

module.exports = config;