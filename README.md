# browser-extension-vite-starter

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation <a name = "installation"></a>
```shell
cd browser_extension_vite_starter
yarn install
# use npm
# npm install
```

## Usage <a name = "usage"></a>
### development
```shell
yarn dev
```
仅 popup page 和 options page 支持在开发模式下预览  

popup page 访问 `localhost:3000/src/popup`  

options page 访问 `localhost:3000/src/options`  

content script 和 background script 需要 build 之后重新加载扩展

### build

```shell
yarn build
```