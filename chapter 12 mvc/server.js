// server.js
const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse form bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from /public at the root path.
// IMPORTANT: This makes your CSS available as "/styles.css"
app.use(express.static(path.join(rootDir, 'public')));
app.use(express.static('public'));

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

// Routes
const homeRoutes = require('./routes/homeRoutes');
app.use('/', homeRoutes);

// Start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
