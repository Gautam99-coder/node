const express=require("express");
const hostRouter=express.Router();
hostRouter.get("/add_home",(req,res,next)=>{
    res.send(`<h1>Welcome to Add Home Page</h1>
        <form action="/add_home" method="POST" >
        <input type="text" name="name" placeholder="Enter Home name" />
        <input type="text" name="address" placeholder="Enter Home address" />
        <input type="number" name="price" placeholder="Enter price per night" />
        <input type="submit"/>
        </form>
        `);

})
hostRouter.post("/add_home",(req,res,next)=>{
    console.log(req.body);
    //store the home data in a file or database
    res.send(`<h2>Home added successfully</h2>
        <a href="/">Go to Home</a>
        `);
})
module.exports=hostRouter;