import * as fs from 'fs';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
// @ts-ignore
import postcssNesting from 'postcss-nesting';
// @ts-ignore
import postcssMixins from 'postcss-mixins';

async function buildCss(entry: any, output: any) {
  const cssEntry = fs.readFileSync(entry);
  const postcssPlugins = [autoprefixer(), postcssNesting(), postcssMixins()];
  const result = await postcss(postcssPlugins).process(cssEntry, { from: entry, to: output });
  fs.writeFileSync(output, result.css);
}

export default buildCss;
