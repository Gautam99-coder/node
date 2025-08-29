//core modules
const path = require("path");
const express = require("express");
const userRouter = express.Router();
//local modules
const rootDir = require("../utils/pathUtil");
userRouter.get("/", (req, res,next) => {
    res.sendFile(path.join(rootDir,'view','home.html'));
});

module.exports = userRouter;