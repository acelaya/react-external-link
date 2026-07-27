// @ts-expect-error This lib does not expose type definitions
import { oxlint as shlink } from '@shlinkio/eslint-config-js-coding-standard';
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
