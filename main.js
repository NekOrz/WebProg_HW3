const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const router = express.Router();  // eslint-disable-line
const app = express();

app.listen(7122, () => {
  console.log('on');
});

app.use('/', router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});


router.get('/', (req, res) => {
  res.render('index', { title: '首頁' });
});
