import * as esbuild from 'esbuild';
import { commonPostProcess } from './common';

function watch() {
  const buildOptions: esbuild.BuildOptions = {
    entryPoints: ['src/index.ts'],
    platform: 'node',
    bundle: true,
    external: ['react'],
    outfile: 'dist/index.esm.js',
    format: 'esm',
    watch: {
      onRebuild(error) {
        if (error) {
          return console.log('[watch] Error!', error);
        }
        commonPostProcess();

        console.log('[watch] Building...');
      },
    },
  };
  esbuild.build(buildOptions).catch((error) => console.log(error));
}

function develop() {
  watch();
}

export { develop };
