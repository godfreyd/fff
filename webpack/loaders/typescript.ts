import webpack from 'webpack';

import { IS_DEV } from '../env';

export default {
    client: {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
            IS_DEV && {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    babelrc: false,
                    ignore: [/node_modules/],
                },
            },
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ].filter(Boolean) as webpack.Loader[],
    },

    ssr: {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
        },
    },
};
