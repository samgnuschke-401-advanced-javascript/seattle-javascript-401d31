'use strict';

const Team = require('./lib/team');

const teamStorage = new Team();

// teamStorage.create({name:'Seahawks'})
//   .then(storedData => {
//     console.log(storedData);
//   })
//   .catch(error => {
//     console.log(error)
//   });

// Vinicio - this is how you would use mongo models
teamStorage.create({name:'Seahawks'})
  .then(storedData => teamStorage.create({name: 'Test'}))
  .then(storedData => console.log(storedData))
  .catch(error => console.error(error));
