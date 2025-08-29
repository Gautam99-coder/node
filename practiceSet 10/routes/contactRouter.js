const path=require('path');
const express=require('express');

const contactRouter=express.Router();
contactRouter.get('/contactUs',(req,res,next)=>{
    console.log(req.url,req.method);
    res.sendFile(path.join(__dirname,'../','views','contactUs.html'));
});
contactRouter.post('/thankyou',(req,res,next)=>{
    console.log(req.url,req.method);
    res.sendFile(path.join(__dirname,'../','views','thankyou.html'));
});
module.exports=contactRouter;