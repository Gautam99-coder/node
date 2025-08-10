const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('</html>');
    res.write('<body>');
    res.write('<h1>Welcome to Home</h1>');
    res.write('<form action="/product" method="POST">');
    res.write('<input type="text" name="name" placeholder="Enter your name">');
    res.write('<br><label for="male">Male</label>');
    res.write('<input type="radio" name="gender" value="male" id="male">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" name="gender" value="female" id="female">');
    res.write('<br><button type="submit">Submit</button>');
    res.write('</body>');
    return res.end();
    }
    else if(req.url.toUpperCase==='/product' && req.method==='POST'){
        fs.writeFile('user.text','Gautam Tharu');
        res.statusCode=302;//status code for redirect
        res.setHeader('Location','/');
        return res.end();
    }
});
const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`);
});