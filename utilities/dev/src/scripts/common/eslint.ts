import { ESLint } from 'eslint';
import * as path from 'path';
import { logger } from '../../utils/logger';

async function lint({ fix = false }) {
  const eslint = new ESLint({
    cwd: process.cwd(),
    overrideConfigFile: path.resolve(process.cwd(), '.eslintrc.js'),
  });

  const results = await eslint.lintFiles(['src/**/*.+(js|ts|tsx)']);

  if (fix) {
    await ESLint.outputFixes(results);
  }

  const formatter = await eslint.loadFormatter();
  const resultText = formatter.format(results);

  if (resultText) {
    logger(`[eslint] Warnings/errors: ${resultText}`);
    return (process.exitCode = 1);
  } else {
    logger(`[eslint] Done. ✅`);
    return;
  }
}

export { lint };
