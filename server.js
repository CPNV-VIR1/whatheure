const http = require("http");
const fs = require("fs");
const host = 'localhost';
const port = 8000;


const requestListener = function (request, response) {
    if (request.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end('Error loading index.html');
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.end(data);
            }
        });
    } else if (request.url === '/about') {
        response.end('About Us');
    } else {
        response.statusCode = 404;
        response.end('Page Not Found');
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});