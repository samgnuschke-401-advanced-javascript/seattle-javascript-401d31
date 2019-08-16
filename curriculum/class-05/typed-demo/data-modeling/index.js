'use strict';

const mongoose = require('mongoose'); // Vinicio - ORM (Object Relational Mapper)

const Players = require('./models/players');

// Vinicio - Unforme Resource Identifier
// URI vs URL? -> L stands for locator
const MONGOOSE_URI = 'mongodb://localhost/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

const players = new Players();


// const createdPlayer = players.create({
//   name: 'John',
//   position: 'CF',
//   bats: 'L',
//   throws: 'R',
//   team:' Code Fellows'
// })
//   .then(savedPlayer => {
//     console.log(savedPlayer);
//     return players.get(savedPlayer._id);
//   })
//   .then(returnedPlayer => console.log(returnedPlayer))
//   .catch(error => console.log(error));


// players.getByName('John')
//   .then(foundPlayers => console.log(foundPlayers))
//   .catch(error => console.log(error));

players.update('5d56e56b6172d28177918c6d', {name: 'Vinicio'})
  .then(console.log)
  .catch(console.log);



















