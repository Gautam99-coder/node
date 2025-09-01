const path=require('path');
const express=require('express');
const hostRouter=express.Router();
hostRouter("/add_home",(req,res,next)=>{
    res.sendfile(path.join(__dirname,'../','views','add_home.html'))
})
module.exports=hostRouter;