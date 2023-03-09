import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/svelte-google-analytics.js',
    format: 'umd',
    name: 'MyComponent'
  },
  plugins: [
    svelte(),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    typescript()
  ],
  watch: {
    clearScreen: false
  }
};
