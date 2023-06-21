const express = require('express');
const mariaDB = require('./mariadb.js');
const path = require('path');
const apiRouter = require('./routes/api');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static(path.join('../frontend', 'public')));
app.use(express.json());
app.use('/api', apiRouter);

app.set('view engine', 'ejs');
app.set('views', path.join('../frontend', 'public'));

app.get('/', async (req, res) => {
    const locations = await mariaDB.getTimes();
    console.log(locations);
});

app.listen(8888);