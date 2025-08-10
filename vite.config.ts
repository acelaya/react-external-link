// @ts-expect-error These fail with "moduleResolution: node". It should use "moduleResolution: nodenext"
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';
import pack from './package.json';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es'], // Generate ES module only
    },
    rollupOptions: {
      external: [...Object.keys(pack.peerDependencies || {}), 'react/jsx-runtime'],
      output: {
        globals: {
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  test: {
    globals: true,
    setupFiles: './test/setup.ts',

    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      screenshotFailures: false,
      instances: [{ browser: 'chromium' }],
    },

    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      include: [
        'src/**/*.tsx',
        '!src/index.ts',
      ],
      reporter: ['text', 'text-summary', 'clover', 'html'],
    },
  },
});
