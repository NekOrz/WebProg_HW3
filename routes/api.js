const express = require('express');
const users = require('../data/users');

const router = new express.Router();

router.get('/query', (req, res) => {
  res.json(req.query);
});

router.get('/users/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    next();
  }
  if (id > 0 && id <= 2) {
    res.json(users[id - 1]);
  }
  else if (id === 7122) {
    res.render('error404', {
      title: 'Ero 7122 Page Not Safe For Work',
      href: 'https://www.youtube.com/watch?v=VLnWf1sQkjY',
    });
  }
  else {
    next();
  }
});

router.post('/body', (req, res) => {
  res.json(req.body);
});

module.exports = router;
