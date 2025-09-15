const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'Alice', joined: new Date(2023, 0, 10) },
  { id: 2, name: 'Bob', joined: new Date(2024, 4, 3) }
];

router.get('/', (req, res) => {
  res.render('users', { title: 'Users', users });
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.render('user', { title: user.name, user });
});

module.exports = router;
