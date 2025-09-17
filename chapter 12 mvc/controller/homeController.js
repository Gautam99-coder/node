// controllers/homeController.js

// In-memory store (simple learning example)
const homes = [];

exports.index = (req, res) => {
  res.render('index', { homes });
};

exports.newForm = (req, res) => {
  res.render('new');
};

exports.create = (req, res) => {
  const { title, location, price, description } = req.body;

  if (!title || !location || !price) {
    // render new with an error message (optional)
    return res.status(400).render('new', { error: 'Title, location and price are required.' });
  }

  const newHome = {
    id: homes.length + 1,
    title,
    location,
    price,
    description: description || ''
  };

  homes.push(newHome);

  // Render success page showing the added home
  res.render('success', { home: newHome });
};
