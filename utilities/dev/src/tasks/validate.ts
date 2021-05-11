import { lint } from '../common/eslint';

async function validate(fix: boolean) {
  await lint({ fix });
}

export { validate };
