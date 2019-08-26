'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Vinicio - bcrypt is going to be used for hashing
const jsonWebToken = require('jsonwebtoken');

const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}, // Vinicio - this is not the naked password
  email: {type: String},
  role: {type: String, required:true, default:'user', enum:['admin','editor','user'] },
});

// Vinicio - this next belongs to mongoose. How do we know that? because we are inside
// a pre hook
users.pre('save', function(next) {
  const SALT_ROUNDS = 10; //== 2^10
  return bcrypt.hash(this.password, SALT_ROUNDS)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(error => throw error);
});

/**
 * This function is going to be use to see if a user can login into our system.
 * We are going to compare the provided password with the stored hash
 * @param auth
 */
users.statics.authenticateBasic = function(auth) {
  // Vinicio - let's start by finding a user via its name
  // then, let's compare passwords
  const query = {username: auth.username};
  return this.findOne(query)
    .then(user => {
      return user ? user.comparePassword(auth.password) : null;
      // if (user) {
      //   return user.comparePassword(auth.password);
      // } else {
      //   // Vinicio - returning false because we couldn't find the user
      //   return false;
      // }
      // user && user.comparePassword(auth.password)
    })
    .catch(console.error);
};

/**
 * This function will compare a given password with a stored hash
 * @param rawPassword
 */
users.methods.comparePassword = function(rawPassword) {
  // Vinicio - inside this function in here `this` represents the current user stored
  //in the DB
  return bcrypt.compare(rawPassword, this.password)
    .then(isPasswordValid => isPasswordValid ? this : null);
};

// Generate a JWT from the user id and a secret
users.methods.generateToken = function() {

  const tokenData  = {
    id: this._id,
    capabilities: [],
  };

  return jsonWebToken.sign(tokenData, process.env.SECRET || 'E7#kSA6px&5bnF9$s!H@JZ^0TXTeXXOv67NXNM&IQyOjyJWX9W*6z0U6V01vARZWe6TMfZ0^#ECPZOcSdc*G4a8obStlV&#4tsy');
  // Vinicio - the sign function creates a token: long, random, unique, encrypted
};

module.exports = mongoose.model('users', users);


// class Stack {
//   // methods
//   push() {}
//   pop() {}
//   constructor() {
//     this.name ='stack';
//   }
// }
