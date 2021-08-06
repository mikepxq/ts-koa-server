import KoaRouter from "koa-router";
const router = new KoaRouter();

// router.prefix("/api");

router.get("/", function (ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
