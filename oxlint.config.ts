// @ts-expect-error This lib does not expose type definitions
import shlink from '@shlinkio/eslint-config-js-coding-standard/oxc/oxlint';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [shlink],
  overrides: [
    {
      files: ['./*.config.ts'],
      rules: {
        'eslint/no-restricted-exports': 'off',
      },
    },
  ],
});
