module.exports = {

  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'max-len': ['error', 110, 2, { ignoreUrls: true }], // airbnb позволяет некоторые пограничные случаи
    // 'no-console': 'error', // airbnb использует предупреждение
    'no-alert': 'error', // airbnb использует предупреждение
    'no-param-reassign': 'off', // Это - не наш стиль?
    radix: 'off', // parseInt, parseFloat и radix выключены. Мне это не нравится.
    'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
    'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb использует .jsx

    'prefer-destructuring': 'off',

    'react/no-find-dom-node': 'off', // Я этого не знаю
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Это всё ещё работает нестабильно
    'react/jsx-one-expression-per-line': 'off',
    'no-use-before-define': 0,
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [2, {
      required: {
        every: ['id'],
      },
    }], // для ошибки вложенных свойств htmlFor элементов label
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'no-var': 0,
    'guard-for-in': 0,
    'object-shorthand': 0,
    'no-restricted-syntax': 0,
    'prefer-template': 0,
    'import/no-amd': 0,
    'jsx-a11y/href-no-hash': 'off',
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  /* globals: {
    "browser": false,
    "window": true,
    "document": true
  } */
};
