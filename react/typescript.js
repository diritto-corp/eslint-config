const react = require('./index.js');
const typescript = require('../typescript.js');

module.exports = {
  parser: typescript.parser,
  parserOptions: typescript.parserOptions,
  plugins: [...react.plugins, ...typescript.plugins],
  extends: [
    ...react.extends,
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    ...react.rules,
    ...typescript.rules,
  }
};
