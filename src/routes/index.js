const newsRouter = require('./news');
const siteRouter = require('./site');
const aboutRouter = require('./about');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/about', aboutRouter);
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
