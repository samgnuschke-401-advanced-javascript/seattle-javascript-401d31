'use strict';

const User = require('./users-model.js');

/**
 * This middleware will run before any route gets hit
 * We are going to load user information IN the request if the request has username/password
 * @param req
 * @param res
 * @param next
 */
module.exports = (request, response, next) => {
  // Vinicio - let' start by extracting the authentication information
  try {
    let [type, authString] = request.headers.authorization.split(' ');
    // switch(type) {
    //   case 'basic':
    //     return _authBasic(authString);
    //   default:
    //     return _authError;
    // }
    if(type === 'basic') {
      return _authBasic(authString);
    } else {
      return _authError();
    }

  } catch(error) {
    // Vinicio - any error will jump right here
    return _authError();
  }

  /**
   * THis function will parse basic authentication
   * @param authString
   * @private
   */
  function _authBasic(authString) {
    const decodedString = Buffer.from(authString, 'base64').toString();
    const [username, password] = decodedString.split(':');
    const userSignIn = {username, password};
    // Vinicio - right now I have the username and the password and I should be able to
    // either login if I want to or create an account if I want to.

    return User.authenticateBasic(userSignIn)
      .then(user => _authenticate(user));
  }

  /**
   * Here, I have either user or false/null/falsy
   * @param user
   * @private
   */
  function _authenticate(user) {
    if(user) {
      // Vinicio - remember that we are in a middleware function
      // Vinicio - if I have a user, I could verify its password.
      // I'm going to attach the user into the request.
      request.user = user;
      request.token = user.generateToken();
      next();
    } else {
      return _authError();
    }
  }

  function _authError() {
    next({status: 401, statusMessage: 'Unauthorized', message:'Invalid Credentials'});
  }
};

