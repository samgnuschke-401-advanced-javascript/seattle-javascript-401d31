'use strict';

const socketIoServer = require('socket.io')(3000);

/**
 * This function will respond to incoming connections
 */
socketIoServer.on('connection', socket => {
  console.log('Connected', socket.id);

  socket.on('message',message => {
    console.log('Processing Message');
    socket.broadcast.emit('log', message);
  });
});

console.log('Server is up on port 3000');
