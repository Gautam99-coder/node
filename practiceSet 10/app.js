const path=require('path');
const express=require('express');
const homeRouter=require('./routes/homeRouter');
const contactRouter=require('./routes/contactRouter')
const app=express();
app.use(homeRouter);
app.use(contactRouter)
app.use((req,res,next)=>{
    res.status(404).send("<h3>404 pand can't load</h3>");
})
const PORT=3002;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`)   
});