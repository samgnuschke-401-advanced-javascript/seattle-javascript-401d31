'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  role: { type: String, required: true, default: 'user', enum: ['admin', 'editor', 'user'] },
});

users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authenticateBasic = function (auth) {
  let query = { username: auth.username };
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(console.error);
};

// Compare a plain text password against the hashed one we have saved
users.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.statics.createFromOauth = function (email) {
  if (!email) { return Promise.reject('Validation Error') }

  return this.findOne({ email })
    .then(user => {
      if (!user) { throw new Error("User not Found"); }
      console.log('Welcome back', user.username);
      return user;
    })
    .catch(err => {
      console.log('Creating new user');
      let username = email;
      let password = 'none';
      return this.create({ username, password, email });
    });
}

// Generate a JWT from the user id and a secret
users.methods.generateToken = function () {
  let tokenData = {
    id: this._id,
    role: this.role,
  };
  return jwt.sign(tokenData, process.env.SECRET);
};

module.exports = mongoose.model('users', users);
