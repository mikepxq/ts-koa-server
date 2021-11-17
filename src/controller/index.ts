import KoaRouter from "koa-router";
const router = new KoaRouter();

import * as users from "./users";
// router.prefix("/api");
router.get("/api/user-list", users.getList);

// export const controller = router;
export default router;
