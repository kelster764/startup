const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require('express');
const DB = require('./database');
const authCookieName = 'token';

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use(cookieParser());

let users = [];
let scores = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;





let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await createUser(req.body.email, req.body.password);
  
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
    }
  });
  
  // GetAuth login an existing user
  apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        user.token = uuid.v4();
        await DB.updateUser(user);
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
        scores = DB.getHighScores;
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });
  
  // DeleteAuth logout a user
  apiRouter.delete('/auth/logout', async (req, res) => {
    //console.log('Cookies:', req.cookies); // See what's actually coming in
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      delete user.token;
      DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
  });
  
  
  // Middleware to verify that the user is authorized to call an endpoint
  const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  };
  
  // GetScores
  apiRouter.get('/scores', verifyAuth, async (_req, res) => {
    const scores = await DB.getHighScores();
    res.send(scores);
  });
  
  // SubmitScore
  apiRouter.post('/score', verifyAuth, async (req, res) => {
    //const scores = await DB.addScore();
    scores = updateScores(req.body);
    res.send(scores);
  });
  
  // Default error handler
  app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });
  
  // Return the application's default page if the path is unknown
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
async function updateScores(newScore) {
  const user = await DB.getUser(newScore.name);
  // const user = await findUser('token', req.cookies[authCookieName]);
  const existingscore = DB.findScore(user.email);
  if(existingscore){
    DB.updateScore(newScore);
  } else{
    await DB.addScore(newScore);
  }
  
  return DB.getHighScores();
}
// function updateScores(newScore) {
//   let found = false;
//   for (const [i, prevScore] of scores.entries()) {
//     if (newScore.score != prevScore.score) {
//       scores.splice(i, 0, newScore);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     scores.push(newScore);
//   }

//   if (scores.length > 10) {
//     scores.length = 10;
//   }

//   return scores;
// }

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  //change the thing here
  //users.push(user);
  DB.addUser(user);
  //addUser(user);
  //this above will call the database thing
  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
  // return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}