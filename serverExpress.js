// Express server for the app
const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    console.log('Hello World!');
    res.status(200);
    res.render('index');
});
const port = 8888;
 app.listen(port);
