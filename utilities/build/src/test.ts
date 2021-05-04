import * as jest from 'jest';
// @ts-ignore
import jestConfigJs from '../config/jest.react';

function test(
  options: { watchMode?: boolean; debug?: boolean; coverage?: boolean } = {
    watchMode: false,
    debug: false,
    coverage: false,
  }
) {
  runJest(options.watchMode, options.debug, options.coverage);
}

function runJest(watchMode = false, debug = false, coverage = false) {
  const projectRootPath = process.cwd();
  const jestConfig = {
    ...jestConfigJs,
    watch: watchMode,
    runInBand: debug,
    coverage: coverage,
  };
  jest.runCLI(jestConfig as any, [projectRootPath]);
}

export { test };
