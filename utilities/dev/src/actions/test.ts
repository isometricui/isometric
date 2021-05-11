import { CommandLineAction, CommandLineFlagParameter } from '@rushstack/ts-command-line';
import { Tasks } from '../tasks';

export class TestAction extends CommandLineAction {
  private _watch!: CommandLineFlagParameter;
  private _debug!: CommandLineFlagParameter;
  private _coverage!: CommandLineFlagParameter;

  public constructor() {
    super({
      actionName: 'test',
      summary: 'Run the testing suite',
      documentation:
        'Test command can be used to test TypeScript source files of React components.',
    });
  }

  protected onExecute(): Promise<void> {
    return Tasks.Test(this._watch.value, this._debug.value, this._coverage.value);
  }

  protected onDefineParameters(): void {
    this._watch = this.defineFlagParameter({
      parameterLongName: '--watch',
      parameterShortName: '-w',
      description: 'Runs testing suite in watch mode',
    });
    this._debug = this.defineFlagParameter({
      parameterLongName: '--debug',
      parameterShortName: '-d',
      description: 'Runs testing suite in debug mode',
    });
    this._coverage = this.defineFlagParameter({
      parameterLongName: '--coverage',
      parameterShortName: '-c',
      description: 'Runs testing suite with coverage',
    });
  }
}
