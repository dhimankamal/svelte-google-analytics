import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
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
    commonjs()
  ],
  watch: {
    clearScreen: false
  }
};
