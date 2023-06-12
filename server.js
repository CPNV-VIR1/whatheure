const express = require('express');
const app = express();

const { connectToMongo, insertLocation, getTimeForLocation } = require('./mongo');


app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200);
    res.render('index');
});
app.get('/store', (req, res) => {
    res.send('This is the store function');
});
app.get('/get', (req, res) => {
    res.send('This is the get function');
});


 app.listen(8888);