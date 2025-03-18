const { MongoClient } = require('mongodb');
const config = require('./db.config.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('dinos');
const userCollection = db.collection('name');
const dinoCollection = db.collection('dino');
