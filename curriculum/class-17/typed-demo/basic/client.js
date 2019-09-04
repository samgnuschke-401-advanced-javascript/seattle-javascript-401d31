'use strict';

const socketIoClient = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const server = socketIoClient.connect(API_URL);

server.emit('message', 'Insomnia is VER long book');

server.on('log', message => {
  console.log(message);
});
