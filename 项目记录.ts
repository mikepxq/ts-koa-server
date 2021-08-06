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
  2.koa-logger
    npm i koa-logger
    npm i --save-dev @types/koa-logger
  3.npm i koa-onerror
    tsconfig.json root
3.基础架构
  1.start.ts------开发启动文件
    npm install debug
    npm i --save-dev @types/debug
  2.app.ts--------程序入口
    npm i koa
    npm i --save-dev @types/koa
  3.view
    1.views-------视图 页面
      npm i koa-views
      npm i --save-dev @types/koa-views
      npm i pug
      npm i koa-static
      npm i --save-dev @types/koa-static
    2.routes------视图路由
      npm i koa-router
      npm i --save-dev @types/koa-router
  4.models--------数据库模型 orm
    1.npm i sequelize
    2.npm i  mysql2
  5.config---------全局配置
  6.controller-----api 
  npm install koa-body
    npm uninstall koa-bodyparser
    npm uninstall  @types/koa-bodyparser
    
 */

/**参照
 nodemon  https://www.npmjs.com/package/nodemon
   */
