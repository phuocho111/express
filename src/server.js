const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config()
const port = process.env.PORT || 3000;
const hostName = process.env.HOST_NAME || 'localhost';
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const errorHandle = require('./app/middleware/errorHandle');

const route = require('./routes');
const db = require('./config/db');

// Connect to database
db.connect();

// Action ---> Dispatcher ---> Function handler

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// Override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

// Custom middleware
app.use(errorHandle);

// HTTP loggerlogger
app.use(morgan('combined'));

// Template enginewwwwwwwwww
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// Routes init
route(app);

app.listen(port, hostName, () => {
  console.log(`App listening on port ${port}`);
});
