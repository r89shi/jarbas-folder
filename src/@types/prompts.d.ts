namespace NPrompts {
  type TMessage = { message: string };

  interface IChoices {
    title: string;
    description: string;
    value: string;
  }

  interface IPicker extends TMessage {
    choices: IChoices[];
  }

  interface IClass {
    text: (props: TMessage) => Promise<prompts.Answers<'idText'>>;
    confirm: (props: TMessage) => Promise<prompts.Answers<'idConfirm'>>;
    picker: (props: IPicker) => Promise<prompts.Answers<'idPicker'>>;
  }
}
