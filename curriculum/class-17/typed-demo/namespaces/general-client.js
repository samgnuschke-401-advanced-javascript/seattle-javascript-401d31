'use strict';

const socketIo = require('socket.io-client');
const fs = require('fs');

const API_URL = 'http://localhost:3000';

const generalConnection = socketIo.connect(API_URL);
const workConnection = socketIo.connect(`${API_URL}/work`);
const fileConnection = socketIo.connect(`${API_URL}/file`);

fs.readFile(`${__dirname}/general-client.js`, (error, data) => {
  if(!error) {
    fileConnection.emit('gimmefiles', data);
  }
});



