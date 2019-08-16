'use strict';

const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  position : {
    type: String,
    required: true,
    uppercase: true,
    enum: ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'RF', 'CF']
  },
  throws : {
    type: String,
    required: true,
    uppercase: true,
    enum: ['R', 'L']
  },
  bats : {
    type: String,
    required: true,
    uppercase: true,
    enum: ['R', 'L']
  },
  team : {
    type: String,
    required: true,
  },
});

// ----------------------------------------------------------------------------------------------
// Hooks
// ----------------------------------------------------------------------------------------------
playerSchema.post('findOne', function (document) {
  // console.log('--AFTER find one player--');
  // console.log({document});
  // console.log(this);
});

playerSchema.post('init', function () {
  // console.log('--AFTER initializing a player--');
  // console.log(this);
});

playerSchema.post('save', function () {
  // console.log('--AFTER saving a player--');
  // console.log(this);
});
// ----------------------------------------------------------------------------------------------
// Schema vs Model
// Rules     Data Manipulation

module.exports = mongoose.model('players', playerSchema);
