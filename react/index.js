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
};