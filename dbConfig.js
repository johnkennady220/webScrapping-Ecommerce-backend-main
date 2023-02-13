const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `mongodb+srv:mongodb://localhost:27017/${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}
