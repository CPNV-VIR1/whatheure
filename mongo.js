// mongo.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI
const client = new MongoClient(uri, { useUnifiedTopology: true });

const connectToMongo = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

const insertLocation = async (databaseName, location) => {
    try {
        const db = client.db(databaseName);
        const collection = db.collection('your-collection');
        await collection.insertOne({ location });
        console.log('Location data stored.');
    } catch (error) {
        console.error('Error inserting document:', error);
        throw error;
    }
};

const getTimeForLocation = async (databaseName, location) => {
    try {
        const db = client.db(databaseName);
        const collection = db.collection('your-collection');
        const result = await collection.findOne({ location });
        console.log('Time data:', result.time);
        return result;
    } catch (error) {
        console.error('Error retrieving document:', error);
        throw error;
    }
};

module.exports = {
    connectToMongo,
    insertLocation,
    getTimeForLocation,
};
