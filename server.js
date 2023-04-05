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
    } else if (request.url.startsWith('/assets/js/')) {
        const fileName = request.url.replace('/assets/js/', '');
        const file = fs.readFileSync(`./assets/js/${fileName}`);
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.end(file, 'utf-8');
    } else if (request.url.startsWith('/assets/json/')) {
        const fileName = request.url.replace('/assets/json/', '');
        const file = fs.readFileSync(`./assets/json/${fileName}`);
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(file, 'utf-8');
    } else {
        response.statusCode = 404;
        response.end('Page Not Found');
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

module.exports = server;