const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());

app.use(async (ctx, next) => {
  if (ctx.method === "OPTIONS") {
    ctx.res.statusCode = 200;
    ctx.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "X-Custom-Header, Content-Type",
    });
  } else {
    ctx.set("Access-Control-Allow-Origin", "*");
  }
  next();
});
router.get("/", async (ctx) => {
  ctx.body = "/";
});

router.post("/register", async (ctx) => {
  ctx.res.statusCode = 200;
  ctx.set("Access-Control-Allow-Origin", "*");
  const { body } = ctx.request;
  console.log(body);
  ctx.body = "body";
});

app.use(router.routes());
app.listen(8000, () => {
  console.log("server is started at port 8000");
});
