const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();  // eslint-disable-line
const app = express();

app.listen(7122, () => {
  console.log('on');
});

app.use(express.static('public'));
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

router.get('/api/users/:id', (req, res, next) => {
  let userData;
  if (req.params.id === '1') {
    userData = {
      id: 1,
      name: 'Joe',
      age: 18,
    };
  }
  else if (req.params.id === '2') {
    userData = {
      id: 2,
      name: 'John',
      age: 22,
    };
  }
  else {
    next();
  }
  res.json(userData);
});

router.post('/api/body', (req, res) => {
  res.json(req.body);
});

app.use((req, res) => {
  res.status(404).send('404 Error');
});
