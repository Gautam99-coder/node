// routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

// Home list
router.get('/', homeController.index);

// Show form to create new home
router.get('/new', homeController.newForm);

// Handle create home
router.post('/homes', homeController.create);

module.exports = router;
