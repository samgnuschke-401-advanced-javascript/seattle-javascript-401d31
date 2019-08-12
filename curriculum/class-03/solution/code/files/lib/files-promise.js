'use strict';

const fs = require('fs');
const util = require('util');
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

module.exports = exports = {};

exports.read = (file) => read(file)
  .then( contents => {
    try{
      return JSON.parse(contents.toString().trim());
    } catch(e) { throw 'Invalid JSON'; }
  })
  .catch(err => {throw err;});

exports.write = (file, text) => {
  let contents = Buffer.from( typeof text === 'object' ? JSON.stringify(text) : text );
  return write(file, contents )
    .then( success => success )
    .catch(err => {throw err;});
};

