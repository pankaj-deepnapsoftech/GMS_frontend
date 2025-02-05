module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended', // If using Vue.js
      'plugin:prettier/recommended', // Prettier plugin to integrate with ESLint
    ],
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    },
  }
  