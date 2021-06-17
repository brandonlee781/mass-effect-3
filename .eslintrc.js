module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    '@vue/typescript',
  ],
  plugins: ['vue'],
  rules: {
    'vue/attribute-hyphenation': 'off'
  }
}
