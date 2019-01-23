module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        /* eslint rules */
        'react/jsx-indent': [true, 4, {checkAttributes: true}],
        'import/prefer-default-export': 1,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '.storybook/**',
                    'stories/**'
                ]
            }
        ]
    },
};
