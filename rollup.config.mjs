import typescript from '@rollup/plugin-typescript';
import pack from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pack.peerDependencies || {}),
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
    ],
    output: [
      { file: pack.main, format: 'cjs' },
      { file: pack.module, format: 'esm' },
    ],
  },
];
