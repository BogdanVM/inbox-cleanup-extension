/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'error',
    'arrow-parens': ['warn', 'always'],
    camelcase: ['error', { properties: 'never', ignoreImports: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2],
    'key-spacing': 'warn',
    'max-lines': ['error', 300],
    'prefer-const': ['error', { destructuring: 'any' }],
    quotes: ['warn', 'single'],
    'require-await': 'warn',
    semi: ['error', 'always'],
    'no-else-return': ['warn', { allowElseIf: true }],
    'no-shadow': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        vars: 'local'
      }
    ],
    'no-unreachable': 'error',
    'no-var': 'error'
  }
};
