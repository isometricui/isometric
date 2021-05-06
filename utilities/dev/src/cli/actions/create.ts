import { CommandLineAction, CommandLineStringListParameter } from '@rushstack/ts-command-line';
import { Tasks } from '../tasks';

export class CreateAction extends CommandLineAction {
  private _name: CommandLineStringListParameter;

  public constructor() {
    super({
      actionName: 'create',
      summary: 'Create a new component',
      documentation: 'Create a new component folder from a template with the specified name.',
    });
  }

  protected onExecute(): Promise<void> {
    return Tasks.CreateComponent(this._name.values);
  }

  protected onDefineParameters(): void {
    this._name = this.defineStringListParameter({
      argumentName: 'NAME',
      parameterLongName: '--name',
      parameterShortName: '-n',
      description: 'Name of the component',
      required: true,
    });
  }
}
