//external modules
const express=require('express');
//local modules
const userRouter=require("./routes/userRouter");

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
app.get("/add_home",(req,res,next)=>{
    res.send(`<h1>Welcome to Add Home Page</h1>
        <form action="/add_home" method="POST" >
        <input type="text" name="name" placeholder="Enter Home name" />
        <input type="text" name="address" placeholder="Enter Home address" />
        <input type="number" name="price" placeholder="Enter price per night" />
        <input type="submit"/>
        </form>
        `);

})
app.post("/add_home",(req,res,next)=>{
    console.log(req.body);
    //store the home data in a file or database
    res.send(`<h2>Home added successfully</h2>
        <a href="/">Go to Home</a>
        `);
})
const PORT=3001;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`)
});