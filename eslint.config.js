import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import boundaries from 'eslint-plugin-boundaries';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'boundaries': boundaries,
      'import': importPlugin,
      'react': reactPlugin,
    },
    settings: {
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        {
          mode: 'full',
          type: 'shared',
          pattern: [
            'src/components/**/*',
            'src/assets/**/*',
            'src/data/**/*',
            'src/styles/**/*',
            'src/hooks/**/*',
            'src/utils/**/*',
            'src/lib/**/*',
            'src/context/**/*',
            'src/providers/**/*',
            'src/routes/**/*',
          ],
        },
        {
          mode: 'full',
          type: 'feature',
          capture: ['featureName'],
          pattern: ['src/features/*/**/*'],
        },

        {
          mode: 'full',
          type: 'app',
          capture: ['_', 'fileName'],
          pattern: ['src/views/**/*'],
        },
        {
          mode: 'full',
          type: 'entry',
          capture: ['_', 'fileName'],
          pattern: ['src/main.tsx'],
        },
        {
          mode: 'full',
          type: 'neverImport',
          pattern: ['src/*'],
        },
      ],
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Boundaries rules
      'boundaries/no-unknown': ['error'],
      'boundaries/no-unknown-files': ['error'],
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: ['shared'],
              allow: ['shared'],
            },
            {
              from: ['feature'],
              allow: [
                'shared',
                [
                  'feature',
                  {
                    featureName: '${from.featureName}',
                  },
                ],
              ],
            },
            {
              from: ['app', 'neverImport'],
              allow: ['shared', 'feature'],
            },
            {
              from: ['entry'],
              allow: [['app', { fileName: '*.tsx' }], 'shared'],
            },
            {
              from: ['app'],
              allow: [['app', { fileName: '*.css' }]],
            },
          ],
        },
      ],

      // Import rules
      'import/no-cycle': ['error'],
      'import/no-self-import': ['error'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/no-extraneous-dependencies': ['error'],

      // React rules
      'react/prop-types': 'off',
    },
  },
);
