import { CommandLineAction, CommandLineFlagParameter } from '@rushstack/ts-command-line';
import { Tasks } from '../tasks';

export class ValidateAction extends CommandLineAction {
  private _fix: CommandLineFlagParameter;

  public constructor() {
    super({
      actionName: 'validate',
      summary: 'Validate source files (linting, formatting)',
      documentation: 'Validate component source files through linting and formatting.',
    });
  }

  protected onExecute(): Promise<void> {
    return Tasks.Validate(this._fix.value);
  }

  protected onDefineParameters(): void {
    this._fix = this.defineFlagParameter({
      parameterLongName: '--fix',
      parameterShortName: '-f',
      description: 'Fixes formatting errors',
    });
  }
}
