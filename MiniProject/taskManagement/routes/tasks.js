const express = require('express');
const router = express.Router();
const store = require('../utils/taskStore');

// show tasks and add form
router.get('/', async (req, res, next) => {
  try {
    const tasks = await store.getAll();
    const flash = req.query.flash ? JSON.parse(req.query.flash) : null;
    res.render('index', { tasks, flash });
  } catch (err) {
    next(err);
  }
});

// create task (from form)
router.post('/tasks', async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !title.trim()) {
      const flash = { type: 'error', message: 'Title is required' };
      return res.redirect('/?flash=' + encodeURIComponent(JSON.stringify(flash)));
    }
    await store.addTask({ title, description });
    const flash = { type: 'success', message: 'Task added' };
    res.redirect('/?flash=' + encodeURIComponent(JSON.stringify(flash)));
  } catch (err) {
    next(err);
  }
});

// delete task via POST (safer for HTML forms)
router.post('/tasks/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const ok = await store.deleteTask(id);
    const flash = ok
      ? { type: 'success', message: 'Task deleted' }
      : { type: 'error', message: 'Task not found' };
    res.redirect('/?flash=' + encodeURIComponent(JSON.stringify(flash)));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
