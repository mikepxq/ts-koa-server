import models from "@/models";

export const getList = async (ctx: Koa.ParameterizedContext) => {
  console.log({ ...ctx.query }); // 获取的是对象 结构代理
  // console.log(ctx.querystring); // 获取的是一个字符串
  // console.log(ctx.url); // 获取url地址
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const list = await models.users.findAll();
  ctx.body = {
    code: 200,
    data: {
      list,
    },
  };
};
