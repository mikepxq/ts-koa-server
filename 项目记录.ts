/**
1.typescript
  1.npm i typescript
    ./node_modules/.bin/tsc --init
    npm i -D @types/node
    ./node_modules/.bin/tsc --watch
  2.npm i -D ts-node
2.统一环境
  1.eslint prettier
    npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier  @typescript-eslint/parser @typescript-eslint/eslint-plugin
    npm i -D eslint
      ./node_modules/.bin/eslint --init
      "lint-fix": "eslint --fix --ext  .ts,tsx,js src"
    npm i -D prettier
    npm i -D eslint-plugin-prettier
    npm i -D eslint-config-prettier
    npm i -D @typescript-eslint/parser
    npm i -D @typescript-eslint/eslint-plugin
  2.lint-staged
    npx mrm@2 lint-staged
  3.别名
    1.tsconfig.json
    2.module-alias
      npm i --save module-alias
2.开发依赖
  1.热更新 nodemon
    npm install --save-dev nodemon
    nodemon.json
 */

/**参照
 nodemon  https://www.npmjs.com/package/nodemon
   */
