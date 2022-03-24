# web-cse440-22sp

Course website for Spring 2022 offering of CSE 440.

## Installation of System Dependencies

Requires Node.js and the Yarn package manager.

- [Node.js](https://nodejs.org/)

  Installers: <https://nodejs.org/en/download/>
  
  Development has used version 16.x.

- [Yarn](https://yarnpkg.com/)

  ```
  npm install --global yarn
  ```

## Installation of Javascript Dependencies

```
yarn install
```
Install dependencies from `yarn.lock`.

## Yarn Scripts

```
yarn dev_serve
```
Serve a debug build on `http://127.0.0.1:3000`, with hot reloading.

```
yarn prod_build
```
Build a production bundle in `dist`.

```
yarn prod_deploy
```
Build static deployment files in `dist`, assuming an existing production bundle.
