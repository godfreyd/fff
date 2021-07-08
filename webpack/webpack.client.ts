'use_strict';

import * as loaders from './loaders';
import { ENV, IS_DEV, IS_PRODUCTION } from './env';
import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const config = {
    mode: ENV,
    name: 'client',
    // Inform webpack that we're building a bundle
    // for Node, rather than for the browser
    target: 'web',

    // Tell webpack the root file of our
    // client application
    entry: {
        mobile: './src/client/platforms/mobile.tsx',
        desktop: './src/client/platforms/desktop.tsx',
    },

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: `[name].js`,
        path: resolve(__dirname, '../', 'public'),
    },

    devtool: IS_PRODUCTION ? 'source-maps' : 'eval-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },

    watch: IS_DEV,
    watchOptions: {
        aggregateTimeout: 100,
    },

    module: {
        rules: [
            loaders.typescript.client,
            loaders.js.client,
            loaders.css.client.css,
            loaders.css.client.scss,
            loaders.file.client,
            loaders.url,
            loaders.svg.client,
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV),
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
    ],
    optimization: {
        noEmitOnErrors: true
    }
};

module.exports = config;
