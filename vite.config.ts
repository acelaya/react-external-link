import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';
import pack from './package.json';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  // @ts-expect-error Error caused by vitest using vite 5 and the root using vite 6. To be fixed in vitest 3.
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),

      name: 'ExternalLink',
      fileName: 'index',
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
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      include: [
        'src/**/*.tsx',
        '!src/index.ts',
      ],
      reporter: ['text', 'text-summary', 'clover'],
    },
  },
});
