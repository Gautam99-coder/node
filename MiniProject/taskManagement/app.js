const express = require('express');
const path = require('path');
// const methodOverride = require('method-override');

const tasksRouter = require('./routes/tasks');

const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(methodOverride('_method')); // optional if you want method override
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', tasksRouter);

// 404
app.use((req, res) => {
  res.status(404).render('index', { tasks: [], flash: { type: 'error', message: 'Page not found' } });
});

// start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
