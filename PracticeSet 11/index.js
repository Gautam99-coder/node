const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home page
app.get('/', (req, res) => {
    res.render('index');
});

// Add Home form
app.get('/add-home', (req, res) => {
    res.render('AddHome');
});

// Handle Add Home form submission
app.post('/add-home', (req, res) => {
    // You can save the home data here if needed
    res.render('thankyou');
});

// 404 handler (should be last)
app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});