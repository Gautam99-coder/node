//core modules
const path=require("path");
const express=require("express");
const hostRouter=express.Router();
hostRouter.get("/add_home",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','add_home.html'));
})
hostRouter.post("/add_home",(req,res,next)=>{
    console.log(req.body);
    //store the home data in a file or database
    res.sendFile(path.join(__dirname,'../','view','homeAdded.html'));
})
module.exports=hostRouter;