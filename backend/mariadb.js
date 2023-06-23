const mariadb = require('mariadb');

const client = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'whatheure',
    connectionLimit: 5 // Adjust the connection limit as per your requirements
});

const connectToMariaDB = async () => {
    let connection;
    try {
        connection = await client.getConnection();
        console.log('Connected to MariaDB!');
        return connection;
    } catch (error) {
        console.error('Error connecting to MariaDB:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

const insertLocation = async (location, offset) => {
    let connection;
    try {
        connection = await client.getConnection();
        const query = 'INSERT INTO locations (location, offset) VALUES (?, ?)';
        await connection.query(query, [location, offset]);
        console.log('Location data stored.');
    } catch (error) {
        console.error('Error inserting document:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.release();
        }
    }
};


const getTimeForLocation = async (databaseName, location) => {
    let connection;
    try {
        connection = await client.getConnection();
        const query = 'SELECT time FROM locations WHERE location = ?';
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
        connection = await client.getConnection();
        const query = 'SELECT * FROM locations';
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
