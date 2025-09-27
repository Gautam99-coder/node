// app.js
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // install if you use ?_method=DELETE
// const expressLayouts = require('express-ejs-layouts'); // optional

const tasksRouter = require('./routes/tasks');

const app = express();

// views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --- MIDDLEWARES (important: body parsers BEFORE routes) ---
app.use(express.urlencoded({ extended: true })); // for form POSTs
app.use(express.json()); // for JSON bodies (fetch/ajax)
app.use(methodOverride('_method')); // optional - install method-override if you use it

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes (after body-parsing)
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => res.redirect('/tasks'));

// simple error handler
app.use((err, req, res, next) => {
  console.error(err.stack || err);
  res.status(500).send('Server error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
