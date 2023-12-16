# React Wedding Card

## Introduction
- This is a simple engagement invitation web app created using [React.js](https://reactjs.org/) library and module-based components.

## Preparations
```bash
$ sudo npm install -g yarn
$ yarn


## Start
```bash
$ npm start
```

## Build & Deploy (using GitHub Page)
- When you build, static files will be generated in `build/*`. You can host static files directly using platforms like [GitHub Pages](https://pages.github.com/). Refer to [this link](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for more details.
- For deployment, it uses the built-in features of `create-react-app` and `gh-pages` (included in `package.json`).
- To deploy static files, you need to adjust the `homepage` value in `package.json`. 
```bash
$ npm run build
$ npm run deploy
