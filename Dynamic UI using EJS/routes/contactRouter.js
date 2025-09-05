const path=require('path');
const express=require('express');
const contactRouter=express.Router();
contactRouter.get('/AddHome',(req,res,next)=>{
    console.log(req.url,req.method);
    res.sendFile(path.join(__dirname,'../','views','AddHome.html'));
});
contactRouter.post('/thankyou',(req,res,next)=>{
    console.log(req.url,req.method);
    res.sendFile(path.join(__dirname,'../','views','thankyou.html'));
});
module.exports=contactRouter;