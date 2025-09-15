// src/routes/index.js
const express = require('express');
const router = express.Router();
const notesRouter = require('./notes');

router.get('/', (req, res) => {
  res.redirect('/notes');
});

router.use('/notes', notesRouter);

module.exports = router;
