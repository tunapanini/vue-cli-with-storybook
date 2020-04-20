module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'airbnb-base',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.ts', '.js', '.vue']
      }
    }
  }
};
