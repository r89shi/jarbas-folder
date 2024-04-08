namespace NIndex {
  interface IFolderNavigator {
    folders: NMkdir.IFolderJsonSub[];
    dirs?: string[];
  }

  interface ICreateContent {
    sufix: string;
    prefix: string;
    name: string;
    content: string[];
  }
}
