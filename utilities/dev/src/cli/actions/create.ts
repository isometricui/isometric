import {
  CommandLineAction,
  CommandLineFlagParameter,
  CommandLineStringParameter,
} from '@rushstack/ts-command-line';
import { Tasks } from '../tasks';

export class CreateAction extends CommandLineAction {
  private _name: CommandLineStringParameter;
  private _dry_run: CommandLineFlagParameter;

  public constructor() {
    super({
      actionName: 'create',
      summary: 'Create a new component',
      documentation:
        'Create a new component folder from a template with the specified name.',
    });
  }

  protected onExecute(): Promise<void> {
    return Tasks.CreateComponent(this._name.value!, this._dry_run.value);
  }

  protected onDefineParameters(): void {
    this._name = this.defineStringParameter({
      argumentName: 'NAME',
      parameterLongName: '--name',
      parameterShortName: '-n',
      description: 'Name of the component',
      required: true,
    });
    this._dry_run = this.defineFlagParameter({
      parameterLongName: '--dry-run',
      description: 'Creates the component only inside the temporary folder',
    });
  }
}
