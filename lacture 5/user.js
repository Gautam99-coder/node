//form
const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');
const UserRequestHandler=(req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form Example</title></head>');
        res.write('</html>');
        res.write('<body>');
        res.write('<form action="/submit" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name">');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" name="gender" value="male" id=male>');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" name="gender" value="female" id=female>');
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
            console.log('Form data:', Buffer.concat(body).toString());
            // Here you can process the form data as needed
            const params=new URLSearchParams(Buffer.concat(body).toString());
            const bodyObject={};
            for(const [key,val] of params.entries()){
                bodyObject[key]=val;
            }
            console.log(bodyObject);
            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
            return res.end();
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><h1>Page Not Found</h1></body></html>');
        return res.end();
    }
}

module.exports = UserRequestHandler;