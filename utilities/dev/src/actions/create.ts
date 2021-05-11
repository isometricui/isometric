import {
  CommandLineAction,
  CommandLineFlagParameter,
  CommandLineStringParameter,
} from '@rushstack/ts-command-line';
import { Tasks } from '../tasks';

export class CreateAction extends CommandLineAction {
  private _name!: CommandLineStringParameter;
  private _run!: CommandLineFlagParameter;

  public constructor() {
    super({
      actionName: 'create',
      summary: 'Create a new component (temporary)',
      documentation:
        'Create a new component folder from a template with the specified name. Use --run flag to write results and create a rush entry.',
    });
  }

  protected onExecute(): Promise<void> {
    return Tasks.CreateComponent(this._name.value!, this._run.value);
  }

  protected onDefineParameters(): void {
    this._name = this.defineStringParameter({
      argumentName: 'NAME',
      parameterLongName: '--name',
      parameterShortName: '-n',
      description: 'Name of the component',
      required: true,
    });
    this._run = this.defineFlagParameter({
      parameterLongName: '--run',
      description:
        'Creates the component inside the components directory and adds entry to rush.json',
    });
  }
}
