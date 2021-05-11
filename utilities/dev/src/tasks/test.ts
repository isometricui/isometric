import { runTests } from '../common/jest';

function test({ watch = false, debug = false, coverage = false }) {
  runTests({ watch, debug, coverage });
}

export { test };
