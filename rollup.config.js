import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import autoPreprocess from 'svelte-preprocess';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

function typeCheck() {
  return {
    writeBundle() {
      require('child_process').spawn('svelte-check', {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });
    },
  };
}

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    typeCheck(),
    alias({
      resolve: ['.svelte', '.js'],
      entries: [
        { find: /^components\/(.*)/, replacement: 'src/components/$1.svelte' },
        { find: /^pages\/(.*)/, replacement: 'src/pages/$1.svelte' },
        { find: 'helpers', replacement: 'src/helpers.js' },
        { find: 'stores', replacement: 'src/stores.js' },
      ],
    }),
    svelte({
      preprocess: autoPreprocess(),
    }),

    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
      }
    },
  };
}
