'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
});

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
})

// authenticate user => Basic
userSchema.statics.authenticateBasic = function (auth) {
  let query = { username: auth.username };
  return this.findOne(query)
    .then(user => {
      return user.comparePassword(auth.password)
    })
    .catch(error => {
      throw error;
    });
}

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
    .then(isValid => isValid ? this : null);
}

// authenticate token => Bearer


// generates a token
userSchema.methods.generateToken = function () {
  let object = {
    id: this._id
  }
  return jwt.sign(object, process.env.SECRET);
}

module.exports = mongoose.model('Users', userSchema);