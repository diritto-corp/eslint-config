module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['spellcheck'],
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // default export 안해도 okay
    'import/prefer-default-export': 'off',
    // spell check for eslint-config
    'spellcheck/spell-checker': ['error', {
      lang: 'en_US',
      comments: false,
      strings: false,
      skipWords: [
        'lang',
        'jsx',
        'ecma',
      ],
    }],
  },
};
