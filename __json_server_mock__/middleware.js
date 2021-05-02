// TODO 配置非RESTFul请求的middlewares
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "wuxue" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名或者密码不正",
      });
    }
  } else {
    res.status(404).json({
      message: "页面不存在",
    });
  }
  next();
};
