const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'whatheure',
    password: 'Pa$$w0rd',
    database: 'whatheure',
    connectionLimit: 5 // Adjust the connection limit as per your requirements
});

const connectToMariaDB = async () => {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Connected to MariaDB!');
        return connection;
    } catch (error) {
        console.error('Error connecting to MariaDB:', error);
        throw error;
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const insertLocation = async (databaseName, location) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const query = 'INSERT INTO your_table (location) VALUES (?)';
        await connection.query(query, [location]);
        console.log('Location data stored.');
    } catch (error) {
        console.error('Error inserting document:', error);
        throw error;
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getTimeForLocation = async (databaseName, location) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const query = 'SELECT time FROM timezones WHERE location = ?';
        const results = await connection.query(query, [location]);
        console.log('Time data:', results[0].time);
        return results[0];
    } catch (error) {
        console.error('Error retrieving document:', error);
        throw error;
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

const getTimes = async () => {
    let connection;
    console.log('Getting time data')
    try {
        connection = await pool.getConnection();
        const query = 'SELECT * FROM timezones';
        const results = await connection.query(query);
        return results;
    } catch (error) {
        console.error('Error retrieving documents:', error);
        throw error;
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

module.exports = {
    connectToMariaDB,
    insertLocation,
    getTimeForLocation,
    getTimes
};
