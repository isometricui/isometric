import * as esbuild from 'esbuild';
import { logger } from '../utils/logger';

function buildTargets({
  targets,
  options,
}: {
  targets: esbuild.BuildOptions[];
  options: esbuild.BuildOptions;
}) {
  const buildTargets = targets.map((target) => {
    return { ...options, ...target };
  });
  buildTargets.map((target) => {
    esbuild.build(target).catch((error) => logger(error));
  });
}

function watch({
  postProcess,
  watchOptions,
}: {
  postProcess: () => void;
  watchOptions: esbuild.BuildOptions;
}) {
  const buildOptions: esbuild.BuildOptions = {
    ...watchOptions,
    watch: {
      onRebuild(error) {
        if (error) {
          return logger(`Watch error: ${error}`);
        } else {
          postProcess();
        }

        logger('[watch] Rebuilding');
      },
    },
  };
  esbuild.build(buildOptions).catch((error) => logger(error));
}

function minifyCss({ entryFile }: { entryFile: string }) {
  const minifyOptions: esbuild.BuildOptions = {
    entryPoints: [entryFile],
    outfile: entryFile,
    minify: true,
    allowOverwrite: true,
  };
  esbuild.buildSync(minifyOptions);
}

export { buildTargets, minifyCss, watch };
