const path=require('path');
const express=require('express');
const homeRouter=require('./routes/homeRouter');
const contactRouter=require('./routes/contactRouter')
const app=express();
app.use(homeRouter);
app.use(contactRouter);
app.use(express.static(path.join(__dirname,'./','public','output.css')));
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','404.html'));
})
const PORT=3002;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`)
});