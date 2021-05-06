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

async function buildCss({ entryFile, outputFile }: { entryFile: string; outputFile: string }) {
  const cssEntry = fs.readFileSync(entryFile);
  const postCssPlugins = [postcssImport(), postcssMixins(), postcssNesting(), autoprefixer];
  const result = await postcss(postCssPlugins).process(cssEntry, { from: entryFile, to: outputFile });
  fs.writeFileSync(outputFile, result.css);
}

export { buildCss };
