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
  public static async CreateComponent(names: readonly string[]): Promise<void> {
    createComponent();
    logger(`[create] Component(s) created: \n - ${names.join('\n - ')}`);
  }
  public static async Develop(): Promise<void> {
    develop();
    logger(`[develop] Watching...`);
  }
  public static async Test(watch: boolean, debug: boolean, coverage: boolean): Promise<void> {
    test({ watch, debug, coverage });
    logger(
      `[test] Testing... ${watch ? '(watch)' : ''} ${debug ? '(debug)' : ''} ${coverage ? '(coverage)' : ''}`
    );
  }
  public static async Validate(fix: boolean): Promise<void> {
    await validate(fix);
    logger(`[validate] Done. ✅`);
  }
}