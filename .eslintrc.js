module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
    },
};
