const filenameRegexp = /\.(jpg|jpeg|png|gif|eot|otf|woff2?|ttf)$/;

export default {
    client: {
        test: filenameRegexp,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
            publicPath: '/assets/',
        },
    },

    ssr: {
        test: filenameRegexp,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
            publicPath: '/assets/',
        },
    },
};
