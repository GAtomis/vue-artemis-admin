/*
 * @Description: eslint
 * @Author: Gavin
 * @Date: 2022-02-24 10:39:49
 * @LastEditTime: 2022-05-13 12:53:35
 * @LastEditors: Gavin
 */
module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境中的全局变量。
    es2021: true,
    es6: true,
    node: true, // Node.js 全局变量和 Node.js 作用域。
  },
  // 继承共享的配置
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-v-html': 'off',
    // endOfLine: 'auto',
  },
}
