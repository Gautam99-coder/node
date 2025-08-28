const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send(`<h1>Hello, Welcome to Airbnb</h1>
        <a href="/add_home">Add Home</a>
        `);
});

module.exports = userRouter;