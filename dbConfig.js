const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `mongodb+srv://johnkennady220:HSL1c9dW7He94S9Z@cluster0.dw17smr.mongodb.net/${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}
