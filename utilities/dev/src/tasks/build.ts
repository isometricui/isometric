import * as esbuild from 'esbuild';
import * as path from 'path';
import * as fs from 'fs-extra';
import { apiExtractor } from '../common/api-extractor';
import { paths } from '../common/common';
import { buildCss } from '../common/postcss';
import { generateTsDeclaration } from '../common/ts-declaration';
import { buildTargets, minifyCss } from '../common/esbuild';

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
  fs.emptyDirSync(paths.output);
  buildTargets({ targets, options });
  generateTsDeclaration({ entry: paths.entryFile, output: 'dist/dts' });
  apiExtractor();
  fs.rmdirSync(path.resolve(paths.output, 'dts'), { recursive: true });
  await buildCss({
    entryFile: paths.stylesEntryFile,
    outputFile: paths.stylesOutputFile,
    map: false,
  });
  minifyCss({ entryFile: paths.stylesOutputFile });
}

export { build };
