![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJs](<https://img.shields.io/badge/nodeJS%20(20.8.0)-%23089000?style=for-the-badge&logo=nodeJS&logoColor=white>)
![Prompts](https://img.shields.io/badge/prompts-%23000000?style=for-the-badge&logo=prompts&logoColor=white)

![LICENSE](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)

# 🛠️ Requirements

- **Node**: (20.8.0)

# 🚀 Execute

```
npx @theturtle/folder
```

# ⚙️ Installation

## 1. Clone the repository

```
git clone https://github.com/r89shi/theturtle-folder.git
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

## 📦 3. Build

```
npm run build
```

**OR**

```
yarn build
```

**OR**

```
pnpm build
```

## 🐇 4. Run

```
npm start
```

**OR**

```
yarn start
```

**OR**

```
pnpm start
```

## 🐞 Run developer mode

```
npm run dev
```

**OR**

```
yarn dev
```

**OR**

```
pnpm dev
```

# 📂 Create new folder structure

Create a `JSON` file into the `database` folder: `src/database/fileName.json`

Open the `JSON` file and insert the code:

```JSON
{
  "root": []
}
```

`root` is required for any `JSON` file. To create a new folder:

```JSON
{
  "root": [
    {
      "name": "First folder name",
      "sub": []
    }
  ]
}
```

> **name** : Folder name.

> **sub** : Sub directories for this folder.

To create a sub folders, insert into `sub` the same structure.

**Example:**

```JSON
{
  "root": [
    {
      "name": "First folder name",
      "sub": [
        {
          "name": "Sub folder name",
          "sub": []
        },
        {
          "name": "Another sub folder name",
          "sub": []
        }
      ]
    }
  ]
}
```
