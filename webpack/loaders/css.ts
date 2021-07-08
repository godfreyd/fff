import { resolve } from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IS_DEV } from '../env';
import webpack from 'webpack';

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        config: { path: resolve(__dirname, '../../', 'configs/postcss/') },
        sourceMap: true,
    },
};

const cssLoader = {
    loader: 'css-loader',
    options: { importLoaders: 1, sourceMap: true },
};

export default {
    client: {
        css: {
            test: /\.css$/,
            use: ['style-loader', IS_DEV && 'css-hot-loader', cssLoader, postcssLoader].filter(
                Boolean
            ) as webpack.Loader[],
        },
        scss: {
            test: /\.scss$/,
            use: [
                'style-loader',
                IS_DEV && 'css-hot-loader',
                MiniCssExtractPlugin.loader,
                cssLoader,
                postcssLoader,
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true },
                },
            ].filter(Boolean) as webpack.Loader[],
        },
    },

    ssr: {
        test: /\.(scss|css)$/,
        loader: 'null-loader',
    },
};
