'use strict';

// Vinicio - file operations using callbacks

// the util package can be used to convert fs to promises too
// https://www.npmjs.com/package/fs-extra uses promises
const fs = require('fs');
const fsExtra = require('fs-extra');

class FileSystem {
  readFile(fileName, externalCallback) {
    fs.readFile(fileName, (error, fileContents) => {
      if(error) {
        externalCallback(error);
      } else {
        // console.log(fileContents.toString());
        externalCallback(undefined,fileContents.toString());
      }
    });
  }

  readFilePromises(fileName) {
    // Vinicio - this line sets up two callbacks: rejection  and success
    return fsExtra.readFile(fileName);
  }
}

module.exports = FileSystem;
