const Players = require('../models/players.js');



// VInicio - remember this is our instance

// Vinicio - We are going to use supergoose to mock out database
const supergoose = require('./supergoose.js');

describe('Players Model', () => {
  it('can create(() a new player', () => {
    const players = new Players();
    const testPlayer =  {
      name: 'John',
      position: 'CF',
      bats: 'L',
      throws: 'R',
      team:' Code Fellows'
    };

    return players.create(testPlayer)
      .then(savedPlayer => {
        Object.keys(testPlayer).forEach(key => {
          expect(savedPlayer[key]).toEqual(testPlayer[key]);
        });
      })
      .catch(error => console.log(error));
  });

  it('can get() a player', () => {
    const players = new Players();
    const testPlayer =  {
      name: 'John',
      position: 'CF',
      bats: 'L',
      throws: 'R',
      team:' Code Fellows'
    };

    return players.create(testPlayer)
      .then(savedPlayer => {
        return players.get(savedPlayer._id);
      })
      .then(resolvedPlayer => {
        Object.keys(testPlayer).forEach(key => {
          expect(resolvedPlayer[key]).toEqual(testPlayer[key]);
        });
      })
      .catch(error => console.log(error));
  });
});











