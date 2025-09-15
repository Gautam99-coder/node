// app.js
const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/index');
const format = require('./src/utils/formate');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// small helper available in views
app.use((req, res, next) => {
  res.locals.trim = (s, n = 40) => (s && s.length > n ? s.slice(0, n) + '…' : s);
  next();
});

app.use('/', indexRouter);

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Not found' });
});

// error handler
app.use((err, req, res, next) => {
  console.error('ERROR HANDLER:', err);
  res.status(500).render('500', { title: 'Server error', error: err });
});
app.use((req, res, next) => {
  res.locals.format = format; // available in EJS as 'format'
  next();
});
// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page not found' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: 'Server error', error: err });
});


app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
