'use strict';

const socketIo = require('socket.io-client');

const API_URL = 'http://localhost:3000';

const fileConnection = socketIo.connect(`${API_URL}/file`);

fileConnection.on('gimmeFiles', payload => {
  console.log(payload);
  console.log(payload.toString());
});
