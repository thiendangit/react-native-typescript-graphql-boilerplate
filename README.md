# React Native TypeScript Apollo Graphql Boilerplate

<div align="center">
  <img src="https://www.clipartmax.com/png/full/1-13184_teddy-clipart-tiger-cat-card-svg-cutting-file-free.png" alt="React Native TypeScript Graphql Boilerplate" width="300"/>
</div>

> ### 📘 Some libraries use in this boilerplate

<div style="display: flex; flex-direction: row; align-self: center; align-items: center">
  <img src="https://reactnative.dev/img/header_logo.svg" width="140" title="hover text">
  <img src="https://uploads.getpop.org/wp-content/uploads/2019/07/graphql.png" width="155" title="hover text">
  <img src="https://reactnavigation.org/img/spiro.svg" width="140" title="hover text">
  <img src="https://iconape.com/wp-content/files/ke/21383/svg/apollo-graphql-compact.svg" width="140" title="hover text">
  <img src="https://code4developers.com/wp-content/uploads/2018/01/Redux.png" width="170" title="hover text">
  <img src="https://docs.nativebase.io/img/nativebaselogo.svg" width="120" title="hover text">
  <img src="https://raw.githubusercontent.com/mpeyper/react-hooks-testing-library/master/public/ram.png" width="120" title="hover text">
</div>

## 👷‍♂️ Structure
<div style="display: flex; flex-direction: row; align-self: center; justify-content: center">
<img src="docs/assets/structure.png" alt="React Native TypeScript Graphql Boilerplate" width="250" height="580"/>
<img src="docs/assets/login.png" alt="React Native TypeScript Graphql Boilerplate" width="250" height="580"/>
<img src="docs/assets/productList.png" alt="React Native TypeScript Graphql Boilerplate" width="250" height="580"/>
</div>

## 🚀 Getting Started

### 🆒 Usage React-Native 0.65.1 & React-Navigation 6

- Create a new project using the template.

```bash
  npx react-native init MyApp --template @thiendangit1102/rn-typescript-graphql
```

- Cd into directory

```
  cd MyApp/
```

- Create .env

```
  cp .env.example .env
```

- Add to .env

```
  API_URL=<YourGraphqlApiUrl>
  DEV_SERVER_IP=<YourDevGraphqlApiUrl>
```

- Install dependencies using npm

```
  npm i or yarn install
```

- Pod install

```
  npm run pod
```

- run device

```
  npm run ios or yarn ios
  OR
  npm run android or yarn android
```
## ⚠️ React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-react- native-template-typescript: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore](https://github.com/npm/npx#description) any locally installed versions of the CLI and use the latest.

Further information can be found here: https://github.com/react-native-community/cli#about

