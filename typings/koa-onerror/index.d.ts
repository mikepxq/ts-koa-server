/**只有单独目录结构 ts-node才能使用
-- typings/
  -- <module_name>/ 重点
    -- index.d.ts
 */

/**自定义模块 */
declare module "koa-onerror" {
  export default function onerror(app: any): any;
}
