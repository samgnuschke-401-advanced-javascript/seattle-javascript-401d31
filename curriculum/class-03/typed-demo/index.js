'use strict';

const FileSystem = require('./lib/file-system');


const myFileSystem = new FileSystem();

console.log(__dirname);

let iAmSMRT = null;

// myFileSystem.readFile(`${__dirname}/quote.txt`,
//   (error, fileString) => {
//     if(error) {
//       console.error('ERROR');
//     } else {
//       iAmSMRT = fileString;
//       console.log(fileString);
//       // Make a different call here
//       // This leads to callback hell
//       // call(() => {
//       //   call(() => {
//       //     call(() => {
//       //       call(() => {
//       //         call(() => {
//       //         });
//       //       });
//       //     });
//       //   });
//       // });
//     }
//   });

myFileSystem.readFilePromises(`${__dirname}/quote.txt`)
  .then(fileString => { // Vinicio - this stars the promise chain - 1
    iAmSMRT = fileString.toString();
    console.log(fileString.toString());
    return 'kali is great';
  })
  .then(message => { // 2
    console.log(message);
    //return myFileSystem.readFilePromises(`${__dirname}/quote2.txt`);
    throw 'ERROR!';
  })
  .then(fileString => {
    console.log(fileString.toString());
    console.log(message);
  })
  .catch(error => console.error(error));

console.log('I am smrt:');
console.log(iAmSMRT);