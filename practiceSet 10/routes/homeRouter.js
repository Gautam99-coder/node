const express = require("express");
const homeRouter = require("express").Router();
const path=require('path');
const rootDir=require('../util/path');
app.get("/",(req,res,next)=>{
    console.log("handling  / middleware",req.url,req.method);
    res.sendFile(path.join(rootDir,'views','home.html'));
})
app.get("/contact_us",(req,res,next)=>{
    console.log("handling  /contact_us",req.url,req.method);
    res.sendFile(path.join(rootDir,'views','contact_us.html'));
})
app.post("/contact_us",(req,res,next)=>{
    console.log("handling /contact_us POST",req.url,req.method);
    res.sendFile(path.join(rootDir,'views','thankyou.html'));
})