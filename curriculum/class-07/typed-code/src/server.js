'use strict';

const express = require('express');
const app = express();

app.use(express.json());

//middleswares
const logger = require('./middlewares/logger.js');

// Store values in memory
const db = [];
// POST SCHEMA
//  id
//  name
//  author
//  description 

const setGreeting = (req, res, next) => {
  req.message = 'Hello, '
  console.log('Middlware Hit');
  next();
}

const handler = (req, res, next) => {
  console.log(req.message);
  res.send('Thanks');
}

const greetAdmin = (name) => {
  return function (req, res, next) {
    console.log(`${req.message}, ${name}`)
    next();
  }
}

app.use(logger);

/**
 * Routes logic
 * app.METHOD(PATH, MIDDLEWARE, HANDLER);
 */

app.get('/greet', setGreeting, greetAdmin('Jacob'), (req, res) => res.send('All Gooood'));
// app.get('/MW', handler);

//** FETCHING ALL POSTS
app.get('/posts', (req, res) => {
  res.send(db);
});
app.post('/posts', (req, res) => {
  const { name, author, description } = req.body;
  const newPost = { name, author, description };
  newPost.id = db.length + 1;
  db.push(newPost);
  res.send(newPost);
});

module.exports = {
  app,
  start: () => {
    app.listen(3000, () => {
      console.log('App is running');
    })
  }
}