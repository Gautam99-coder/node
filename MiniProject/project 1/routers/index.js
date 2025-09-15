const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to Project1 demo' });
});

module.exports = router;
