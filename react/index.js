const base = require('../index.js');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  rules: {
    ...base.rules,
    // jsx, tsx, js, ts 확장자 허용
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    // jsx 에서 React import 안시켜줘도 되도록 수정
    'react/react-in-jsx-scope': 'off',
    // spread props 허용
    'react/jsx-props-no-spreading': 'off',
  }
};