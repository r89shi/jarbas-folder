namespace NMkdir {
  interface IFile {
    fileName: string;
    dirs?: string[];
  }

  interface IFileCreate extends IFile {
    content: string;
  }

  interface IFolder {
    folderName: string;
    dirs?: string[];
  }

  interface IFileJson {
    sufix: string;
    prefix: string;
    ext: string;
  }

  interface IFolderJson {
    root: IFolderJsonSub[];
  }

  interface IFolderJsonSub {
    name: string;
    sub: IFolderJsonSub[];
    files?: IFileNest[];
  }

  interface IClass {
    processDir: string;
    folderExist: (props: IFolder) => Promise<boolean>;
    createFolder: (props: IFolder) => Promise<void>;
    deleteFolder: (props: IFolder) => Promise<void>;
    lsFolder: (props: IFolder) => Promise<string[]>;

    fileExist: (props: IFile) => Promise<boolean>;
    createFile: (props: IFileCreate) => Promise<void>;
    deleteFile: (props: IFile) => Promise<void>;
    readFile: (props: IFile) => Promise<string>;
  }
}
