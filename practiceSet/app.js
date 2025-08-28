const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("first dummy middleware",req.url,req.method);
    next();
})
app.use((req,res,next)=>{
    console.log("second dummy middleware",req.url,req.method);
    next();
})
// app.use((req,res,next)=>{
//     console.log("third dummy middleware",req.url,req.method);
//     res.send('<h1>Hello from ExpressJS</h1>');
// })
app.get("/",(req,res,next)=>{
    console.log("handling  / middleware",req.url,req.method);
    res.send('<h1>Hello from ExpressJS</h1>');
})
app.get("/contact_us",(req,res,next)=>{
    console.log("handling  /contact_us",req.url,req.method);
    res.send(`<h1>Give your details</h1>
        <form action="/contact_us" method="POST" >
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="submit"/>
        </form>
        `);
})

app.post("/contact_us",(req,res,next)=>{
    console.log("handling /contact_us POST",req.url,req.method);
    res.send('<h2>We will contact you sortly</h2>')
})
const PORT=3002;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`)   
});