import { build } from './build';
import { develop } from './develop';
import { test } from './test';
import { validate } from './validate';

enum BUILD_STATE {
  BUILD = 'build',
  DEVELOP = 'develop',
  TEST = 'test',
  VALIDATE = 'validate',
}

switch (process.argv[2]) {
  case BUILD_STATE.BUILD:
    build();
    break;
  case BUILD_STATE.DEVELOP:
    develop();
    break;
  case BUILD_STATE.TEST:
    switch (process.argv[3]) {
      case '--watch':
        test({ watchMode: true });
        break;
      case '--debug':
        test({ watchMode: true, debug: true });
        break;
      case '--coverage':
        test({ coverage: true });
        break;
      default:
        test();
        break;
    }
    break;
  case BUILD_STATE.VALIDATE:
    validate();
    break;

  default:
    console.log('[isometric] Use "build", "develop", "test" or "validate');
    break;
}
