module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'valid-jsdoc': 0,

        // Codestyle
        'arrow-parens': [2, 'always'],
        'operator-linebreak': [
            2,
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'space-before-function-paren': [
            2,
            {
                asyncArrow: 'always',
                anonymous: 'never',
                named: 'never',
            },
        ],

        // React
        'react/jsx-no-bind': 1,
        'react/jsx-fragments': ['error', 'syntax'],
    },
};
