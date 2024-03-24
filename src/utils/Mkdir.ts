import fs from 'fs';
import path from 'path';

export class Mkdir implements NMkdir.IClass {
  processDir: string;

  constructor() {
    this.processDir = process.cwd();
  }

  async folderExist(props: NMkdir.IFolder): Promise<boolean> {
    const dir = !props.dirs
      ? path.join(this.processDir, props.folderName)
      : path.join(this.processDir, ...props.dirs, props.folderName);

    return await fs.existsSync(dir);
  }

  async createFolder(props: NMkdir.IFolder): Promise<void> {
    const dir = !props.dirs
      ? path.join(this.processDir, props.folderName)
      : path.join(this.processDir, ...props.dirs, props.folderName);

    await fs.mkdirSync(dir);
  }

  async deleteFolder(props: NMkdir.IFolder): Promise<void> {
    const dir = !props.dirs
      ? path.join(this.processDir, props.folderName)
      : path.join(this.processDir, ...props.dirs, props.folderName);

    await fs.rmdirSync(dir);
  }

  async fileExist(props: NMkdir.IFile): Promise<boolean> {
    const dir = !props.dirs
      ? path.join(this.processDir, props.fileName)
      : path.join(this.processDir, ...props.dirs, props.fileName);

    return await fs.existsSync(dir);
  }

  async lsFolder(props: NMkdir.IFolder): Promise<string[]> {
    // Local
    // const dir = !props.dirs
    //   ? path.join(this.processDir, props.folderName)
    //   : path.join(this.processDir, ...props.dirs, props.folderName);

    // NPM
    const dir = !props.dirs
      ? path.join(__dirname, '../', props.folderName)
      : path.join(__dirname, '../', ...props.dirs, props.folderName);

    return await fs.readdirSync(dir);
  }

  async createFile(props: NMkdir.IFileCreate): Promise<void> {
    const dir = !props.dirs
      ? path.join(this.processDir, props.fileName)
      : path.join(this.processDir, ...props.dirs, props.fileName);

    await fs.writeFileSync(dir, props.content);
  }

  async deleteFile(props: NMkdir.IFile): Promise<void> {
    const dir = !props.dirs
      ? path.join(this.processDir, props.fileName)
      : path.join(this.processDir, ...props.dirs, props.fileName);

    await fs.rmSync(dir);
  }

  async readFile(props: NMkdir.IFile): Promise<string> {
    // Local
    // const dir = !props.dirs
    //   ? path.join(this.processDir, props.fileName)
    //   : path.join(this.processDir, ...props.dirs, props.fileName);

    // NPM
    const dir = !props.dirs
      ? path.join(__dirname, '../', props.fileName)
      : path.join(__dirname, '../', ...props.dirs, props.fileName);

    return await fs.readFileSync(dir, { encoding: 'utf8', flag: 'r' });
  }
}
