const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const aboutRouter = require('./about');
const blogRouter = require('./blogs');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/about', aboutRouter);
  app.use('/blogs', blogRouter);
  app.use('/', siteRouter);

  // app.get('/', (req, res) => {
  //     res.render('home')
  // })

  // app.get('/search', (req, res) => {
  //     res.render('search')
  // })

  // app.post('/search', (req, res) => {
  //     res.send('')
  // })
}

module.exports = route;
