const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: '首頁' });
});

module.exports = router;
