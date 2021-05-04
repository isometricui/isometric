import { ESLint } from 'eslint';
import * as path from 'path';

async function lint() {
  console.log('[isometric] Linting...');
  const eslint = new ESLint({
    overrideConfigFile: path.resolve(__dirname, '../config', '.eslintrc'),
  });

  const results = await eslint.lintFiles(['src/**/*.+(js|ts|tsx)']);

  const formatter = await eslint.loadFormatter();
  const resultText = formatter.format(results);

  console.log(resultText);
}

function validate() {
  lint();
}

export { validate };
