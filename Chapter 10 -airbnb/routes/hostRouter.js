//core modules
const path=require("path");
const express=require("express");
const hostRouter=express.Router();
//local modules
const rootDir = require("../utils/pathUtil");
hostRouter.get("/add_home",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','addhome.html'));
})
hostRouter.post("/add_home",(req,res,next)=>{
    console.log(req.body);
    //store the home data in a file or database
    res.sendFile(path.join(rootDir,'view','homeAdded.html'));
})
module.exports=hostRouter;