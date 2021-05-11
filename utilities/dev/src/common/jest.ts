import * as jest from 'jest';
import { config } from '../config/jest';

function runTests({ watch = false, debug = false, coverage = false }) {
  const projectRootPath = process.cwd();
  const jestConfig = {
    ...config,
    watch: watch,
    runInBand: debug,
    coverage: coverage,
  };
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  jest.runCLI(jestConfig as any, [projectRootPath]);
}

export { runTests };
