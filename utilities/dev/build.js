const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const watch = process.argv[2] === '--watch' ? true : false;

const options = {
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  platform: 'node',
  minify: true,
  bundle: true,
  watch,
  external: [
    '@microsoft/api-extractor',
    '@rushstack/ts-command-line',
    'autoprefixer',
    'esbuild',
    'eslint',
    'fs-extra',
    'jest',
    'postcss',
    'postcss-import',
    'postcss-mixins',
    'postcss-nesting',
    'typescript',
  ],
  target: ['node14'],
  logLevel: 'warning',
};

fs.rmdirSync(path.resolve(__dirname, 'dist'), { recursive: true });
esbuild.build(options).catch((error) => console.log(error));
