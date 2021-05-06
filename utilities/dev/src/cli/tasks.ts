import { build } from '../scripts/build';
import { createComponent } from '../scripts/create';
import { validate } from '../scripts/validate';
import { test } from '../scripts/test';
import { develop } from '../scripts/develop';
import { logger } from '../utils/logger';

export class Tasks {
  public static async Build(watch: boolean): Promise<void> {
    test({
      watch: false,
      debug: false,
      coverage: false,
    });
    await validate(false);
    await build();
    logger(`[build] Done. ${watch ? '(watch)' : ''}`);
  }
  public static async CreateComponent(name: string, run: boolean): Promise<void> {
    createComponent({ name, run });
    logger(
      `[create] Component(s) created${!run ? ' in .temp folder' : ''}: \n - ${name}`
    );
    run && logger(`Run rush update to install dependencies.`);
  }
  public static async Develop(): Promise<void> {
    develop();
    logger(`[develop] Watching...`);
  }
  public static async Test(
    watch: boolean,
    debug: boolean,
    coverage: boolean
  ): Promise<void> {
    test({ watch, debug, coverage });
    logger(
      `[test] Testing... ${watch ? '(watch)' : ''} ${debug ? '(debug)' : ''} ${
        coverage ? '(coverage)' : ''
      }`
    );
  }
  public static async Validate(fix: boolean): Promise<void> {
    await validate(fix);
    logger(`[validate] Done. ✅`);
  }
}
