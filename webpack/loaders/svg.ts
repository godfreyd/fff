// import fileLoader from './file';

// const MAX_INLINE_SIZE = 1024;

// const svgoLoader = {
//     loader: 'svgo-loader',
//     options: {
//         plugins: [
//             { convertColors: { shorthex: false } },
//             { convertPathData: false },
//             { removeTitle: true },
//             { removeUselessDefs: false },
//         ],
//     },
// };

// export default {
//     client: {
//         test: /\.svg$/,
//         use: [
//             {
//                 loader: 'svg-url-loader',
//                 options: {
//                     ...fileLoader.client.options,
//                     stripdeclarations: true,
//                     noquotes: false,
//                     encoding: 'none',
//                     limit: MAX_INLINE_SIZE,
//                 },
//             },
//             svgoLoader,
//         ],
//     },

//     ssr: {
//         test: /\.svg$/,
//         use: [
//             {
//                 loader: 'svg-url-loader',
//                 options: {
//                     ...fileLoader.ssr.options,
//                     noquotes: true,
//                     limit: MAX_INLINE_SIZE,
//                 },
//             },
//             svgoLoader,
//         ],
//     },
// };



export default {
    client: {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [
                            {
                                removeViewBox: false,
                            },
                        ],
                    },
                },
            },
        ],
    },

    ssr: {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [
                            {
                                removeViewBox: false,
                            },
                        ],
                    },
                },
            },
        ],
    },
};
