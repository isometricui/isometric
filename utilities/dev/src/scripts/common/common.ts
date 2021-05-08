import * as path from 'path';

const paths = {
  components: path.resolve(__dirname, '../../../components'),
  root: path.resolve(process.cwd()),
  output: path.resolve(process.cwd(), 'dist'),
  source: path.resolve(process.cwd(), 'src'),
  entryFile: path.resolve(process.cwd(), 'src', 'index.ts'),
  stylesEntryFile: path.resolve(process.cwd(), 'src/styles.css'),
  stylesOutputFile: path.resolve(process.cwd(), 'dist/styles.css'),
};

export { paths };
