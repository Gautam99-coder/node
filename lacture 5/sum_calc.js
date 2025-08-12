const sumHandler = (req, res) => {
    if (req.url === '/calculator') { // Call the userRequest handler for calculator page
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head>
            <title>Calculator</title>
            </head>
            <body>
            <h1>Calculator Page</h1>
            <form action="/calculater_result" method="POST">
                <input type="number" name="num1" placeholder="Enter first number">
                <input type="number" name="num2" placeholder="Enter second number">
                <button type="submit">Sum</button>
            </form>
            </body>
            </html>
        `);//sum works
        return res.end();
    }
    else if (req.url === '/calculater_result' && req.method === 'POST') {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const params = new URLSearchParams(Buffer.concat(body).toString());//convert Buffer to string
            const bodyObj=Object.fromEntries(params.entries());
            console.log(bodyObj);
            const num1 = bodyObj.num1;
            const num2 = bodyObj.num2;
            const sum = bodyObj.parseInt(num1) + bodyObj.parseInt(num2);
            console.log(`Sum of ${num1} and ${num2} is ${sum}`);
            // Respond with the sum
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Calculator Result</title></head>');
            res.write('<body>');
            res.write(`<h1>Sum of ${num1} and ${num2} is ${sum}</h1>`);
            res.write('<a href="/">Go Home</a>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    } else {
        return false; // Indicate not handled
    }
}
module.exports = sumHandler; // Fixed export