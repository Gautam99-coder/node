
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','Text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('</html>');
    res.write('<body><h1>Welcome to Complete Coding</h1></body>');
    res.end();
    
});
const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`);
});