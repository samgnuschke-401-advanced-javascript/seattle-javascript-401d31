'use strict';

const superagent = require('superagent');

superagent.get('https://pokeapi.co/api/v2/pokemon/ditto/')
  .then(response => {
    console.log(response.body);
    return superagent.get('https://pokeapi.co/api/v2/pokemon/snorlax/');
  })
  .then(() => console.log('This is the other then'))

