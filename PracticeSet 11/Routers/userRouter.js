const path = require('path');
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('users', { users: ['Alice', 'Bob', 'Charlie'] });
});
module.exports = router;
