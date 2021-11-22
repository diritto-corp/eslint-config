module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // default export 안해도 okay
    'import/prefer-default-export': 'off',
    // if 문 한줄에서도 {} 사용하도록 설정
    curly: ['error', 'all'],
  },
};
