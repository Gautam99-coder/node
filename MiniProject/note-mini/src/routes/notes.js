// src/routes/notes.js
const express = require('express');
const router = express.Router();
const { notes } = require('../utils/data');

router.get('/', (req, res) => {
  res.render('index', { title: 'All Notes', notes });
});
router.get('/json', (req, res) => {
  res.json({ notes });
});
router.get('/:id', (req, res) => {
  const note = notes.find(n => n.id === req.params.id);
  if (!note) return res.status(404).send('Note not found');
  res.render('note', { title: note.title, note });
});

module.exports = router;
