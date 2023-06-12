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
app.get('/get', async (req, res) => {
    try {
        const locations = await getTimeForLocation(databaseName);
        res.status(200);
        res.render('index', { locationData: locations });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Internal Server Error');
    }
});



 app.listen(8888);