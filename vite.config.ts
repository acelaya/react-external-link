import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pack from './package.json';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  plugins: [react(), dts()],
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
});
