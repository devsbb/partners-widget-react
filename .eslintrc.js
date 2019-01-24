module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        /* eslint rules */
        'import/prefer-default-export': 1,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['.storybook/**', 'stories/**'],
            },
        ],
    },
};
