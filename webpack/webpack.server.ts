'use_strict';

import * as loaders from './loaders';
import { ENV, IS_PRODUCTION } from './env';
import { resolve } from 'path';
import nodeExternals from 'webpack-node-externals';

const config = {
    mode: ENV,
    name: 'server',
    // Inform webpack that we're building a bundle
    // for Node, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our
    // server application
    entry: './src/index.ts',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, '../', 'build'),
    },

    externals: [
        nodeExternals({
            whitelist: [/@material-ui\/core\/.*/],
        }),
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: IS_PRODUCTION ? 'source-maps' : 'eval-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },

    module: {
        rules: [loaders.typescript.ssr, loaders.js.ssr, loaders.css.ssr, loaders.file.ssr, loaders.svg.ssr],
    },
};

module.exports = config;
