const express = require('express');
const path = require('path');
const apiRouter = require('./backend/routes/api');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'public')));
app.use(express.json());
app.use('/api', apiRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8888);