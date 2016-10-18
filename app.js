const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.listen(7122, () => {
  console.log('on');
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes.api);
app.use('/', routes.pages);

app.use((req, res) => {
  res.render('error404', {
    title: 'Error 404 Page Not Found',
    href: 'https://github.com/NekOrz/WebProg_HW3#webprog-hw3',
  });
});

module.exports = app;
