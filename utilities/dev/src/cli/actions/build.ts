import { CommandLineAction, CommandLineFlagParameter } from '@rushstack/ts-command-line';
import { Tasks } from '../tasks';

export class BuildAction extends CommandLineAction {
  private _watch: CommandLineFlagParameter;

  public constructor() {
    super({
      actionName: 'build',
      summary: 'Bundle a component',
      documentation: 'Build command bundles and minifes component source files.',
    });
  }

  protected onExecute(): Promise<void> {
    return Tasks.Build(this._watch.value);
  }

  protected onDefineParameters(): void {
    this._watch = this.defineFlagParameter({
      parameterLongName: '--watch',
      parameterShortName: '-w',
      description: 'Builds in watch mode',
    });
  }
}
