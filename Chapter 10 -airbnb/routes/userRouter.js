const path=require('path');
const expess=require('express');
const userRouter=expess.Router();
userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","home.html"))
})
module.exports=userRouter;