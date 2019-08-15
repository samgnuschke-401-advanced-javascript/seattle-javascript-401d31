'use strict';

const Team = require('../lib/team')

describe('#teams', () => {
  test('#create', () => {
    const testTeam = {name: 'Test'};
    const teamStorage = new Team();


    return teamStorage.create(testTeam)
      .then(newTeam => {
        expect(newTeam._id).toBeDefined();
        expect(newTeam.name).toEqual('Test');
      })
      .catch((error) => {
        // Vinicio - this callback will happen if something fails in the promise chain
        console.error(error);
      });
  }); // Waits X ms
});