const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('</html>');
    res.write('<body>');
    //create navigation links bar
    res.write('<nav><ul>');
    res.write('<li><a href="/">Home</a></li>');
    res.write('<li><a href="/product">Products</a></li>');
    res.write('<li><a href="/men">Men</a></li>');
    res.write('<li><a href="women">Women</a></li>');
    res.write('<li><a href="/kids">Kids</a></li>');
    res.write('<li><a href="cart">Cart</a></li>')
    res.write('</ul></nav>');
    res.write('<h1>Welcome to Home</h1>');
    res.write('</body>');
    }
    else if(req.url==='/men'){
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Welcome to Men</h2>')
    return res.end();
    }
    else if(req.url==='/product'){
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Welcome to product</h2>');
    return res.end();
    }
    else if(req.url==='/kids'){
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Welcome to Kids</h2>')
    return res.end();
    }
    else if(req.url==='/women'){
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Welcome to Women</h2>')
    return res.end();
    }
    else if(req.url==='/cart'){
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Welcome to Cart</h2>')
    return res.end();
    }
});
const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`);
});