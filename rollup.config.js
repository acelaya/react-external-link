import typescript from 'rollup-plugin-typescript2';
import { main, module, peerDependencies } from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript')
      })
    ],
    output: [
      { file: main, format: 'cjs' },
      { file: module, format: 'esm' }
    ]
  }
];
