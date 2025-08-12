//form
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form Example</title></head>');
        res.write('</html>');
        res.write('<body>');
        res.write('<form action="/submit" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        return res.end();
    } else if (req.url === '/submit' && req.method === 'POST') {
        let body = [];
        req.on('data', chunk => {
            console.log(chunk) // Convert Buffer to string
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Received data:', body);
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Form Submitted</title></head>');
            res.write('</html>');
            res.write('<body>');
            res.write('<h1>Form submitted successfully!</h1>');
            res.write(`<p>${body}</p>`);
            res.write('</body>');
            console.log('Form data:', Buffer.concat(body).toString());
            // Here you can process the form data as needed
            res.write('<a href="/">Go back</a>');
            res.write('</body>');
            const params=new URLSearchParams(Buffer.concat(body).toString());
            const bodyObject={};
            for(const [key,val] of params.entries()){
                bodyObject[key]=val;
            }
            console.log(bodyObject);
            return res.end();
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><h1>Page Not Found</h1></body></html>');
        return res.end();
    }
}
);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});