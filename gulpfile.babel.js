'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import serve from 'browser-sync';
import del from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported from 'supports-color';
import historyApiFallback from 'connect-history-api-fallback';
import log from 'fancy-log';
import PluginError from 'plugin-error';

const paths = {
    src: path.join(__dirname, 'src'),
    demo: path.join(__dirname, 'demo'),
    dist: path.join(__dirname, 'dist')
};

/**
 * Description: Deletes dist folder and contents
 *
 * Usage: gulp clean
 */

export const clean = (cb) => del([paths.dist])
    .then(function (paths) {
        log.info('[clean]', paths);
        cb();
    });

/**
 * Description: Starts a development server.
 *
 * Usage: gulp dev
 */
const startDevServer = () => {
    const config = require('./config/webpack.dev.config');
    const compiler = webpack(config);

    serve({
        port: process.env.PORT || 3000,
        open: true,
        server: {
            baseDir: 'src'
        },
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: config.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
};

export const dev = gulp.series(startDevServer);

/**
 * Description: Build the production site out as minified assets
 *
 * Usage: gulp prod
 */
const buildProd = (cb) => {
    const config = setEntry(
        require('./config/webpack.dist.config'),
        paths.src
    );

    build(config, cb);
};

export const prod = gulp.series(clean, buildProd);

/**
 * Description: Build the Demo site out as minified assets
 *
 * Usage: gulp demo
 */
const buildDemo = (cb) => {
    const config = setEntry(
        require('./config/webpack.dist.config'),
        paths.demo
    );

    build(config, cb);
};

export const demo = gulp.series(clean, buildDemo);

// Adds entry path to webpack config file
function setEntry(config, entryPath) {
    config.entry.main = path.join(entryPath, 'index.js');
    return config;
}

// Builds distribution assets
function build(config, cb) {
    webpack(config, (err, stats) => {
        if(err) {
            throw new PluginError('webpack', err);
        }

        log('[webpack]', stats.toString({
            colors: colorsSupported,
            hash: false,
            version: false,
            timings: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: false
        }));

        cb();
    });
}
