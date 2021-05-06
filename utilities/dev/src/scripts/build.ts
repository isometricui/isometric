import * as esbuild from 'esbuild';
import * as path from 'path';
import { apiExtractor } from './common/api-extractor';
import { paths } from './common/common';
import { buildCss } from './common/postcss';
import { generateTsDeclaration } from './common/ts-declaration';
import { buildTargets, minifyCss } from './common/esbuild';
import { cleanDirectory } from '../utils/fs';

const options: esbuild.BuildOptions = {
  entryPoints: ['src/index.ts'],
  platform: 'node',
  bundle: true,
  minifySyntax: true,
  minifyWhitespace: true,
  minifyIdentifiers: false,
  external: ['react'],
};

const targets: esbuild.BuildOptions[] = [
  {
    outfile: 'dist/index.esm.js',
    format: 'esm',
  },
  {
    outfile: 'dist/index.cjs.js',
    format: 'cjs',
  },
];

async function build() {
  cleanDirectory({ path: paths.output });
  buildTargets({ targets, options });
  generateTsDeclaration({ entry: paths.entryFile, output: 'dist/dts' });
  apiExtractor();
  cleanDirectory({ path: path.resolve(paths.output, 'dts') });
  await buildCss({ entryFile: paths.stylesEntryFile, outputFile: paths.stylesOutputFile });
  minifyCss({ entryFile: paths.stylesOutputFile });
}

export { build };
