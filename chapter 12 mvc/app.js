const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// simple in-memory store
const homes = [];

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home: list homes + link to add
app.get('/', (req, res) => {
  res.render('index', { homes });
});

// Form to add new home
app.get('/homes/new', (req, res) => {
  res.render('new');
});

// Create home (POST)
app.post('/homes', (req, res) => {
  const { title, location, price, description } = req.body;

  // basic validation (required fields)
  if (!title || !location || !price) {
    return res.status(400).send('Title, location, and price are required.');
  }

  const newHome = {
    id: homes.length + 1,
    title,
    location,
    price,
    description: description || ''
  };

  homes.push(newHome);

  // show success page for the newly added home
  res.render('success', { home: newHome });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
