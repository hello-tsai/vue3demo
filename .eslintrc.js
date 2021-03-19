module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'never'],
    'key-spacing': ['error', { mode: 'minimum' }],
    'no-multi-spaces': 'off',
    'no-else-return': 'off',
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
  },
};
