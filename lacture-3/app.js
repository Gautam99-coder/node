// const { Console } = require('console');
const http=require('http');

// function requestLister(req,res){
//     console.log(req);
// }
// http.createServer(requestLister);
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    // process.exit();
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`)
});