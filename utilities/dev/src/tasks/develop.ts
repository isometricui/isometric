import * as fs from 'fs-extra';
import * as path from 'path';
import { paths } from '../common/common';
import { buildCss } from '../common/postcss';
import { watch } from '../common/esbuild';
import { generateTsDeclaration } from '../common/ts-declaration';

function develop() {
  watch({
    postProcess: () => {
      generateTsDeclaration({ entry: paths.entryFile, output: 'dist' });
    },
    watchOptions: {
      entryPoints: ['src/index.ts'],
      platform: 'node',
      bundle: true,
      external: ['react'],
      outfile: 'dist/index.esm.js',
      format: 'esm',
    },
  });

  fs.watch(path.resolve(paths.root, 'src/'), () => {
    console.log('changed');
    buildCss({
      entryFile: paths.stylesEntryFile,
      outputFile: paths.stylesOutputFile,
      map: true,
    });
  });
}

export { develop };
