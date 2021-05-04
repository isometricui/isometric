import * as path from 'path';
import buildCss from './postcss';
import { buildTsDeclarationFiles } from './type-declaration';

const paths = {
  root: path.resolve(process.cwd()),
  output: path.resolve(process.cwd(), 'dist'),
  source: path.resolve(process.cwd(), 'src'),
  entryFile: path.resolve(process.cwd(), 'src', 'index.ts'),
};

function commonPostProcess() {
  buildTsDeclarationFiles(paths.entryFile);
  buildCss(path.resolve(process.cwd(), 'src/styles.css'), path.resolve(process.cwd(), 'styles.css'));
}

export { paths, commonPostProcess };
