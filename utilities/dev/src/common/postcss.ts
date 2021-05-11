/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as fs from 'fs';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
// @ts-ignore
import postcssImport from 'postcss-import';
// @ts-ignore
import postcssMixins from 'postcss-mixins';
// @ts-ignore
import postcssNesting from 'postcss-nesting';
// @ts-ignore
import postcssFunctions from 'postcss-functions';

import * as cssFunctions from '../utils/css/functions';

async function buildCss({
  entryFile,
  outputFile,
  map = false,
}: {
  entryFile: string;
  outputFile: string;
  map: boolean;
}) {
  const cssEntry = fs.readFileSync(entryFile);
  const postCssPlugins = [
    postcssImport(),
    postcssFunctions({ functions: cssFunctions }),
    postcssMixins(),
    postcssNesting(),
    autoprefixer,
  ];
  const result = await postcss(postCssPlugins).process(cssEntry, {
    from: entryFile,
    to: outputFile,
    map,
  });
  fs.writeFileSync(outputFile, result.css);
}

export { buildCss };
