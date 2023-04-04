"use strict";
const http = require("http");
const server = require("../server");

test('GET / returns a 200', (done) => {
    const hostname = "localhost";
    const port = process.env.PORT || 8000;
    const path = "/";

    const options = {
        hostname,
        port,
        path,
        method: "GET",
    };

    const request = http.request(options, (response) => {
        expect(response.statusCode).toBe(200);
        done();
    });

    request.end();
});
