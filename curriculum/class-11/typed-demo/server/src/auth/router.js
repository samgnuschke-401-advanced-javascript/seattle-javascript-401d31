'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save() // Vinicio - this line will trigger the user.pre(save)
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  // Vinicio - if we are right here, everything works
  // I should be able to have request.user and request.token
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;
