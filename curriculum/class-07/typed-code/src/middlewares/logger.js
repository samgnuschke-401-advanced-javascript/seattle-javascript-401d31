'use strict';

// LOG info to the console

module.exports = (req, res, next) => {
  console.log(`LOG: ${req.method} :: ${req.path}`);
  next();
}