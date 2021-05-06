const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const options = {
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  platform: 'node',
  minify: true,
  bundle: true,
  external: [
    'esbuild',
    'eslint',
    'typescript',
    '@rushstack/ts-command-line',
    '@microsoft/api-extractor',
    'jest',
    'postcss',
    'autoprefixer',
    'postcss-import',
    'postcss-nesting',
    'postcss-mixins',
    'fs-extra',
  ],
  target: ['node14'],
  logLevel: 'warning',
};

fs.rmdirSync(path.resolve(__dirname, 'dist'), { recursive: true });
esbuild.build(options).catch((error) => console.log(error));
