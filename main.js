const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();  // eslint-disable-line
const app = express();

app.listen(7122, () => {
  console.log('on');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

router.get('/api/query', (req, res) => {
  res.json(req.query);
});

router.post('/api/body', (req, res) => {
  res.json(req.body);
});
