const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies for forms (if needed)
app.use(express.urlencoded({ extended: true }));

// Make util helpers available in EJS templates
app.locals.formatDate = require('./utils/formatDate');

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 handler
app.use((req, res) => res.status(404).send('Not found'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
