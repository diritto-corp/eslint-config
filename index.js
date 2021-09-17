module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // TypeScript 에서 function return 값 type 해제
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // jsx, tsx, js, ts 확장자 허용
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    // jsx 에서 React import 안시켜줘도 되도록 수정
    'react/react-in-jsx-scope': 'off',
    // spread props 허용
    'react/jsx-props-no-spreading': 'off',
  }
};