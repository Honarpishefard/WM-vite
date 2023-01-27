module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'css',
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 4,
        useTabs: false,
        trailingComma: 'all',
      },
    ],
  },
};
