/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const prettier = require("./.prettierrc.js");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["warn", prettier], //同步规则
    "@typescript-eslint/explicit-module-boundary-types": "off", //函数没有返回类型
    "@typescript-eslint/no-unused-vars": "warn", //没用的变量
    "@typescript-eslint/no-explicit-any": "off", //没用的变量
  },
};
