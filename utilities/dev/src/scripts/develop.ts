import { paths } from './common/common';
import { buildCss } from './common/postcss';
import { watch } from './common/esbuild';
import { generateTsDeclaration } from './common/ts-declaration';

function develop() {
  watch({
    postProcess: () => {
      buildCss({ entryFile: paths.stylesEntryFile, outputFile: paths.stylesOutputFile });
      generateTsDeclaration({ entry: paths.entryFile, output: 'dist' });
    },
  });
}

export { develop };
