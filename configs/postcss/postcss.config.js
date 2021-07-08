/* eslint-disable */
module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-preset-env'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer'),
        require('postcss-url')({ url: 'inline', optimizeSvgEncode: true }),
        require('postcss-simple-vars'),
        require('postcss-custom-properties'),
        require('postcss-calc'),
        require('postcss-csso'),
    ],
    parser: require('postcss-scss'),
};
