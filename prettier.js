module.exports = {
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
  ],
  // eslint-config-prettier 에서 허용하고 있는 룰들은 여기에서 제외
  // https://github.com/prettier/eslint-config-prettier#special-rules
  rules: {
    'arrow-body-style': 'error',
    // if 문 한줄에서도 {} 사용하도록 설정
    curly: ['error', 'all'],
  },
};
