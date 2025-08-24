//core modules
// const http=require('http');
//external modules
const express=require('express');
//local modules
const UserRequestHandler=require('./user');
const app=express();
// const server=http.createServer(app);
app.use("/", (req,res,next)=>{
    console.log("first middleware",req.url,req.method);
    next();
})
app.use("/submit",(req,res,next)=>{
    console.log("second middleware",req.url,req.method);
    res.send('<h1>Form Submitted</h1>');
})
const PORT=3001;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`)
});