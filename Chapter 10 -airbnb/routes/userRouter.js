//core modules
const path = require("path");
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send(path.join(__dirname,'../','view','home.html'));;
});

module.exports = userRouter;