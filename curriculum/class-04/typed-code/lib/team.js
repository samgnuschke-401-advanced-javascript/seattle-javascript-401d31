'use strict';

// Vinicio - think about this class as a table
// We call this a 'model'
// Vinicio - this could have been called 'TeamData'

class Team { // This would be a static class
  constructor() {
    this._storage = []; // We'll swap this with a mongo database
    this.schema = {
      name: {
        required: true,
      },
    };
  }

  get() {}

  create(entry) {
    // Vinicio - simulating an async operation for learning purposes
    entry._id = Math.random();
    if(this._isValid(entry)){
      this._storage.push(entry);
      return Promise.resolve(entry);
    }
    return Promise.reject(new Error('Invalid Entry'));
  }

  update(id, newEntry) {
    if(this._isValid(newEntry)){

      this._storage = this._storage.map(item => id === item._id ?
      newEntry : item);

      return Promise.resolve(newEntry);
    }
    return Promise.reject(new Error('Invalid Entry'));
  }

  delete() {
    // Vinicio - we'll complete this will filter
  }

  _isValid(entry) {
    return true;
  }
}

module.exports = Team;