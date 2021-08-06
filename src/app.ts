import koa from "koa";
import views from "koa-views";
import koaStatic from "koa-static";
import koaLogger from "koa-logger";
import onerror from "koa-onerror";
import koaBody from "koa-body";

import routes from "@/routes";
import controller from "@/controller";

const app = new koa();
onerror(app);
app.use(koaLogger());
app.use(koaBody());

app.use(koaStatic(__dirname + "/public"));
app.use(views(__dirname + "/views", { extension: "pug" }));

app.use(routes.routes());
app.use(routes.allowedMethods()); //405;
app.use(controller.routes());
app.use(controller.allowedMethods()); //405;

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});
export default app;
