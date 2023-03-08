import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: {
    sourcemap: true,
    format: 'umd',
    name: 'MySvelteComponent',
    file: 'dist/my-svelte-component.min.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into a separate file
      css: css => {
        css.write('dist/my-svelte-component.min.css');
      }
    }),
    typescript({
      sourceMap: !production,
      inlineSources: !production
    }),

    // If you have external dependencies installed from npm, you'll most likely need these plugins.
    // They tell Rollup how to find the external libraries in node_modules:
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),

    // Minify the code in production
    production && terser()
  ]
};