module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
};
