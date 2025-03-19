const { MongoClient } = require('mongodb');
const config = require('./db.config.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('dinos');
const userCollection = db.collection('user');
const scoreCollection = db.collection('dino');


// (async function testConnection() {
//     try {
//       await db.command({ ping: 1 });
//       console.log(`Connect to database`);
//     } catch (ex) {
//       console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//       process.exit(1);
//     }
//   })();
  



  async function main() {
    try {
      // Test that you can connect to the database
      await db.command({ ping: 1 });
      console.log(`DB connected to ${config.hostname}`);
    } catch (ex) {
      console.log(`Connection failed to ${url} because ${ex.message}`);
      process.exit(1);
    }
  
    try {
      // Insert a document
      const user = {
        email: 'urmom',
        password: 'cheese'
      };
      await userCollection.insertOne(user);
      const query = { email: 'urmom'};
      const options = {
        sort: {},
        limit: 10,
      };
      const cursor = userCollection.find(query, options);
      const users = await cursor.toArray();
      users.forEach((i) => console.log(i));
  
    } catch (ex) {
      console.log(`Database (${url}) error: ${ex.message}`);
    } finally {
      await client.close();
    }


  }
  
  main();


async function addUser(user){
    await userCollection.insertOne(user);
}

async function addScore(score){
    return scoreCollection.insertOne(score);
}

async function getHighScores(){
    const query = { score: { $gt: 0, $lt: 900 } };
    const options = {
        limit: 10,
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
}

function getUser(email) {
    return userCollection.findOne({ email: email });
  }

function getUserByToken(token) {
return userCollection.findOne({ token: token });
}
  

module.exports = {
    addUser,
    addScore,
    getHighScores,
    getUser,
    getUserByToken
  };
