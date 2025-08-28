const newsRouter = require("./news");
const meRouter = require("./me");
const aboutRouter = require("./about");
const blogRouter = require("./blogs");
const userRouter = require("./users");

function route(app) {
  app.use("/api/News", newsRouter);
  app.use("/api/Me", meRouter);
  app.use("/api/About", aboutRouter);
  app.use("/api/Blogs", blogRouter);
  app.use("/api/Users", userRouter);
}

module.exports = route;
