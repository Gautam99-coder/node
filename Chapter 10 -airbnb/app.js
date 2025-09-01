//external modules
const express=require('express');
//local modules
const hostRouter=require("./routes/hostRouter")
const hostRouter=require("./routes/userRouter")
const app=express();
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})
// app.get("/",(req,res,next)=>{
//     res.send(`<h1>Hello, Welcome to Airbnb</h1>
//         <a href="/add_home">Add Home</a>
//         `);
// })
app.use("/",userRouter);
app.use(express.urlencoded()); //to parse the incoming form data in req.body
app.use(hostRouter);
const PORT=3002;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`)
});