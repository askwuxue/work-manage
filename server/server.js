const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const bodyParser = require("koa-bodyparser");
// const jwtAuth = require("koa-jwt");
const jwt = require("jsonwebtoken");
// const { koaJwtSecret } = require('jwks-rsa');
// const privateKey = 'hello';

app.use(bodyParser());

app.use(async (ctx, next) => {
  if (ctx.method === "OPTIONS") {
    ctx.res.statusCode = 200;
    ctx.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, bearer",
    });
  } else {
    ctx.set({
      "Access-Control-Allow-Origin": "*",
    });
  }
  next();
});

// 首页
router.get("/", async (ctx) => {
  ctx.body = "/";
});

// 注册
router.post("/register", async (ctx) => {
  ctx.res.statusCode = 200;
  ctx.set("Access-Control-Allow-Origin", "*");
  // TODO 使用console打印看不到body直接访问
  const { body } = await ctx.request;
  const token = jwt.sign(
    {
      // 设置过期时间
      exp: Math.floor(Date.now() / 1000) + 5,
      data: "register",
    },
    "secret"
  );
  ctx.body = {
    token,
    username: body.username,
  };
});

// 登录
router.post("/login", async (ctx) => {
  ctx.res.statusCode = 200;
  ctx.set("Access-Control-Allow-Origin", "*");
  // TODO 使用console打印看不到body直接访问
  const { bearer } = await ctx.request.headers;
  // 对token进行解码
  // const decode = jwt.verify(bearer, "secret");
  // 对token进行验证，如果token不一致。验证失败
  jwt.verify(bearer, "secret", function (err, data) {
    if (err) {
      console.log("login failed");
    } else {
      console.log("login success");
    }
  });
  ctx.body = {};
});

app.use(router.routes());
app.listen(8000, () => {
  console.log("server is started at port 8000");
});
