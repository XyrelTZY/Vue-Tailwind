import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: 'src/main.js',
  output: {
    format: 'esm',
    file: 'dist/bundle.js',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
});
