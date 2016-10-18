const express = require('express');

const router = new express.Router();

router.get('/query', (req, res) => {
  res.json(req.query);
});

router.get('/users/:id', (req, res, next) => {
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

router.post('/body', (req, res) => {
  res.json(req.body);
});

module.exports = router;
