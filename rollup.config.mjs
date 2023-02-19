import typescript from '@rollup/plugin-typescript';
import pack from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pack.main, format: 'cjs' },
      { file: pack.module, format: 'esm' },
    ],
    external: [...Object.keys(pack.peerDependencies || {}), 'react/jsx-runtime'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
    ],
  },
];
