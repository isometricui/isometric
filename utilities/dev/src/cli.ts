import { CommandLineParser } from '@rushstack/ts-command-line';
import { BuildAction } from './actions/build';
import { CreateAction } from './actions/create';
import { DevelopAction } from './actions/develop';
import { TestAction } from './actions/test';
import { ValidateAction } from './actions/validate';

export class DevCommandLine extends CommandLineParser {
  public constructor() {
    super({
      toolFilename: 'dev',
      toolDescription: 'Isometric UI Development Utilities',
    });

    this.addAction(new BuildAction());
    this.addAction(new CreateAction());
    this.addAction(new DevelopAction());
    this.addAction(new TestAction());
    this.addAction(new ValidateAction());
  }

  protected onExecute(): Promise<void> {
    return super.onExecute();
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  protected onDefineParameters(): void {}
}
