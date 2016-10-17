const express = require('express');

const router = express.Router();  // eslint-disable-line

const app = express();

app.listen(7122, () => {
  console.log('on');
});

app.use('/', router);

router.get('/', (req, res) => {
  res.send('<h1>首頁</h1>');
});
