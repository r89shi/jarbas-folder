![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJs](<https://img.shields.io/badge/nodeJS%20(20.8.0)-%23089000?style=for-the-badge&logo=nodeJS&logoColor=white>)
![Prompts](https://img.shields.io/badge/prompts-%23000000?style=for-the-badge&logo=prompts&logoColor=white)

![LICENSE](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)

# 🛠️ Requirements

- **Node**: (20.8.0)

# 🚀 Installation

## 1. Clone the repository

```
git clone https://github.com/r89shi/jarbas-folder.git
```

## 2. Install the dependencies

```
npm install
```

**OR**

```
yarn install
```

**OR**

```
pnpm install
```

## 3. Create new folder structure

1. Create a `JSON` file, inside the `database` folder.
2. Inside the `JSON` file, insert the follow structure:

```JSON
{
  "root": []
}
```

The `root` is required for any `JSON` file.

```JSON
{
  "name": "First folder name",
  "sub": []
}
```

Inside the `root`, we have the structure following by:

**name** : Folder name.

**sub** : Sub directories for this folder. To create a sub folders, insert into `sub` the same structure.

**Example:**

```JSON
{
  "name": "First folder name",
  "sub": [
    {
      "name": "Sub folder name",
      "sub": []
    }
  ]
}
```

## 4. Run the android

For this step connect a physical device on USB.

```
npm android
```

or

```
yarn android
```
