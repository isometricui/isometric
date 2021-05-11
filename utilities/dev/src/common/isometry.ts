import * as path from 'path';
import { paths } from './common';

const isometryFilePath = path.resolve(paths.source, 'css.isometry.ts');

function isometry() {
  console.log(isometryFilePath);
}

export { isometry };
