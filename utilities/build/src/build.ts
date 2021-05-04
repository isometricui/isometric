import * as esbuild from 'esbuild';
import * as fs from 'fs';
import * as path from 'path';
import { commonPostProcess, paths } from './common';

const buildOptions: esbuild.BuildOptions = {
  entryPoints: ['src/index.ts'],
  platform: 'node',
  bundle: true,
  external: ['react', path.resolve(__dirname, '../jest/style-mock.js')],
};

const targets = [
  {
    outfile: 'dist/index.esm.js',
    format: 'esm',
  },
  {
    outfile: 'dist/index.cjs.js',
    format: 'cjs',
  },
];

function cleanDirectory(folderName: string) {
  fs.rmdirSync(folderName, {
    recursive: true,
  });
}

function buildTarget(buildTargets: { [key: string]: string }[]) {
  const targets = buildTargets.map((target) => {
    return { ...buildOptions, ...target };
  });
  targets.map((target) => {
    esbuild.build(target).catch((error) => console.log(error));
  });
}

function build() {
  cleanDirectory(paths.output);
  // jest
  buildTarget(targets);
  commonPostProcess();
}

export { build };
