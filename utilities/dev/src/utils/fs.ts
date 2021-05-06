import * as fs from 'fs';

function cleanDirectory({ path }: { path: string }) {
  fs.rmdirSync(path, { recursive: true });
}

export { cleanDirectory };
