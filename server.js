const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200);
    res.render('index');
});

 app.listen(8888);