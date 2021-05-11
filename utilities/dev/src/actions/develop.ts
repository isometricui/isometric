import { CommandLineAction } from '@rushstack/ts-command-line';
import { Tasks } from '../tasks';

export class DevelopAction extends CommandLineAction {
  public constructor() {
    super({
      actionName: 'develop',
      summary: 'Develop a component in watch mode',
      documentation: 'Develop a component.',
    });
  }

  protected onExecute(): Promise<void> {
    return Tasks.Develop();
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  protected onDefineParameters(): void {}
}
