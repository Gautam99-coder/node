const express = require('express');
const router = express.Router();
const store = require('../utils/taskStore');

// list tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await store.getAll();
    res.render('index', { tasks });
  } catch (err) { next(err); }
});

// create task (from form)
router.post('/', async (req, res, next) => {
  try {
    const title = (req.body.title || '').trim();
    if (!title) {
      // basic validation: redirect back
      return res.redirect('/tasks');
    }
    await store.create({ title });
    res.redirect('/tasks');
  } catch (err) { next(err); }
});

// toggle complete using PUT
router.put('/:id/toggle', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const task = await store.getById(id);
    if (!task) return res.status(404).send('Not found');
    await store.update(id, { completed: !task.completed });
    res.redirect('/tasks');
  } catch (err) { next(err); }
});

// delete
router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await store.remove(id);
    res.redirect('/tasks');
  } catch (err) { next(err); }
});

module.exports = router;
