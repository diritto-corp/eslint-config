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
    // Typescript 라서 default props 부분 해소 가능
    'react/require-default-props': 'off',
    // Typescript 라서 propTypes 해소 가능
    'react/prop-types': 'off',
  }
};
