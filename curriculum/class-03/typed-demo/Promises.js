'use strict';

const returnsAPromise = () => {
  // Vinicio - promises are classes that hide the complexity of callbacks
  return new Promise((resolve, reject) => {
    let name = "";

    if (name === 'kali') {
      resolve();
    }
    reject();
  });
};

returnsAPromise()
.then()
.catch();