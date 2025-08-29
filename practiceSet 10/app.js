const path=require('path');
const express=require('express');
const app=express();
const homeRouter=require('./routes/homeRouter');
const rootDir=require('./utils/pathUtil');
app.use(homeRouter);
app.use(path.join(rootDir,'public'));
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})
const PORT=3002;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`)   
});