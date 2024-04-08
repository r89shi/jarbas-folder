#!/usr/bin/env node

import { Prompts } from '../utils/Prompts';
import { Mkdir } from '../utils/Mkdir';

class Main {
  prompts: NPrompts.IClass;
  mkdir: NMkdir.IClass;
  folderName?: string;

  constructor() {
    console.clear();
    this.prompts = new Prompts();
    this.mkdir = new Mkdir();

    this.init();
  }

  async init() {
    const folderChoices = await this.listPossibilities();

    if (folderChoices.length <= 0) {
      return;
    }

    const question = await this.prompts.picker({
      message: 'What folder would you like to create?',
      choices: folderChoices
    });

    if (!question || !question?.idPicker) {
      return;
    }

    let folders: NMkdir.IFolderJson = JSON.parse(
      await this.mkdir.readFile({
        fileName: question.idPicker,
        dirs: ['database']
      })
    );

    if (!folders) {
      console.log('[-] Folders were not founded.');
      return;
    }

    await this.create(folders);
  }

  async listPossibilities(): Promise<NPrompts.IChoices[]> {
    const dbFolders = await this.mkdir.lsFolder({
      folderName: 'database'
    });

    const possibilities: NPrompts.IChoices[] = dbFolders
      .map((folder: string) => {
        if (folder.includes('.json')) {
          const name = folder
            .replace('.json', '')
            .replace(folder[0], folder[0].toUpperCase());

          return {
            title: name,
            description: `Create (${name}) project folder structure`,
            value: folder
          };
        }
        return {
          title: '',
          description: '',
          value: ''
        };
      })
      .filter((folder) => {
        if (!!folder.title) return folder;
      });

    return possibilities;
  }

  async create(_folders: NMkdir.IFolderJson) {
    const folders: NMkdir.IFolderJson = _folders;

    await this.setFolderName();

    if (!this.folderName) {
      console.log('[-] Folder name was not founded.');
      return;
    }

    console.log('√ Creating folder structure...');

    if (!this.createAndCheck({ folderName: this.folderName })) {
      console.log(`[-] The ${this.folderName} folder was not created.`);
      return;
    }

    if (folders.root.length < 1) {
      console.log('[-] Folder structure was not founded.');
      return;
    }

    this.folderNavigator({ folders: folders.root, dirs: [this.folderName] });
  }

  async createYear() {
    await this.setFolderName();

    if (!this.folderName) {
      console.log('[-] Folder name was not founded.');
      return;
    }
  }

  async setFolderName(): Promise<void> {
    const folder = await this.prompts.text({
      message: 'What is the folder name?'
    });

    if (!folder || !folder.idText) {
      console.log('[-] Name could not be empty.');
      return;
    }

    const checkFolder = await this.mkdir.folderExist({
      folderName: folder.idText
    });

    if (checkFolder) {
      const folderQuestion = await this.prompts.confirm({
        message: 'Folder alredy exist, would you like to try another name?'
      });

      if (!folderQuestion.idConfirm) {
        return;
      }

      return this.setFolderName();
    }

    this.folderName = folder.idText;
  }

  async folderNavigator(props: NIndex.IFolderNavigator) {
    if (!props.folders) {
      return;
    }

    for (const folder of props.folders) {
      if (!folder.name) {
        break;
      }

      if (!this.createAndCheck({ folderName: folder.name, dirs: props.dirs })) {
        console.log(`[-] Folder ${folder.name} was not founded.`);
        break;
      }

      // Create Sub Folders
      if (!!folder?.sub && folder.sub.length > 0) {
        this.folderNavigator({
          folders: folder.sub,
          dirs: props.dirs?.concat(folder.name)
        });
      }

      // Create files
      if (!!folder?.files && folder.files.length > 0) {
        for (const file of folder.files) {
          const fi: NMkdir.IFileJson = file;
          const pre = !!fi.prefix ? `${fi.prefix}-` : '';
          const su = !!fi.sufix ? `.${fi.sufix}` : '';

          const content = this.createContent({
            sufix: fi.sufix,
            prefix: fi.prefix,
            name: this.folderName ?? '',
            content: fi.content
          });

          this.mkdir.createFile({
            content: content,
            fileName: `${pre}${this.folderName}${su}.${fi.ext}`,
            dirs: props.dirs?.concat(folder.name)
          });
        }
      }
    }
  }

  createContent(props: NIndex.ICreateContent) {
    const { content, name, prefix, sufix } = props;

    if (content.length <= 0) {
      return '';
    }

    let makeContent = '';

    for (const c of content) {
      const s1 = name.replace(name[0], name[0].toUpperCase());
      const s2 = name.toLocaleLowerCase();

      let newContent = `${c}`.replace(/(\$\{1\})/g, s1);
      newContent = `${newContent}`.replace(/(\$\{2\})/g, s2);

      makeContent += `${newContent}\n`;
    }

    return makeContent;
  }

  async createAndCheck(props: NMkdir.IFolder): Promise<boolean> {
    const { folderName, dirs } = props;

    await this.mkdir.createFolder({
      folderName,
      dirs
    });

    const checkFolder = await this.mkdir.folderExist({
      folderName,
      dirs
    });

    if (!checkFolder) {
      console.log('[-] Main folder was not created.');
      return false;
    }

    return true;
  }
}

const main = new Main();
