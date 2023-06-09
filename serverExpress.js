// Express server for the app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.send('Hello World!');
});
const port = 8888;
 app.listen(port);
