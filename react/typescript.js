const basic = require('./index.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: [...basic.plugins, '@typescript-eslint'],
  extends: [
    ...basic.extends,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    ...basic.rules,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
  }
};
