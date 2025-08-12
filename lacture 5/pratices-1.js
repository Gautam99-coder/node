//create a calculator module
const sumHandler = require('./sum_calc');
const userRequest = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Welcome Home</h1>');
        res.write('<a href="/calculator">Sum Calculator</a>'); // Fixed link spelling
        return res.end();
    }
    // Call sumHandler for calculator routes
    if (sumHandler(req, res) === false) {
        // If sumHandler did not handle, send 404
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Page Not Found</h1>');
        return res.end();
    }
}
module.exports = userRequest;