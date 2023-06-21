const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static(path.join('../frontend', 'public')));
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

app.set('view engine', 'html');
app.set('views', '../frontend');

app.listen(8888);