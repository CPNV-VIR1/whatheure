const express = require('express');
const mariaDB = require('./mariadb.js');
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

app.get('/api/timezone', async (req, res) => {
    console.log('GET /api/locations')
    try {
        const locations = await mariaDB.getTimes(); // Appel à votre fonction pour récupérer les données de localisation depuis MariaDB
        console.log(locations);
        res.json({ locations }); // Renvoie les données de localisation au format JSON
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(8888);