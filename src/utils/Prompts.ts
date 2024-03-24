import prompts from 'prompts';

export class Prompts implements NPrompts.IClass {
  async text(props: NPrompts.TMessage): Promise<prompts.Answers<'idText'>> {
    const response = await prompts({
      type: 'text',
      name: 'idText',
      message: props.message
    });

    return response;
  }

  async confirm(
    props: NPrompts.TMessage
  ): Promise<prompts.Answers<'idConfirm'>> {
    const response = await prompts({
      type: 'toggle',
      name: 'idConfirm',
      message: props.message,
      initial: false,
      active: 'yes',
      inactive: 'no'
    });

    return response;
  }

  async picker(props: NPrompts.IPicker): Promise<prompts.Answers<'idPicker'>> {
    const response = await prompts({
      type: 'select',
      name: 'idPicker',
      message: props.message,
      choices: props.choices,
      initial: 0
    });

    return response;
  }
}
