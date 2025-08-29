//core modules
const path=require("path");
//external modules
const express=require('express');
//local modules
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");
const rootDir=require("./utils/pathUtil")
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
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'view','404.html'));
});
const PORT=3001;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`)
});