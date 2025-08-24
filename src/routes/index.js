const newsRouter = require('./news');
const meRouter = require('./me');
const aboutRouter = require('./about');
const blogRouter = require('./blogs');
const userRouter = require('./users');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/about', aboutRouter);
  app.use('/', blogRouter);
  app.use('/api/v1/users', userRouter);
}

module.exports = route;
