'use strict';

const server = require('socket.io')(3000);

server.on('connection', socket => {
  console.log('CONNECTION', socket.id);

  // Here, you define all the messages the connection will respond to
  socket.on('message', message => {
    server.emit('message', message);
  });
});


// --------------------------------------------------------------
// Namespace - Files
// --------------------------------------------------------------

const fileNamespace = server.of('/file');

fileNamespace.on('connection', socket => {
  console.log('Someone has connected to the file namespace');

  socket.on('gimmeFiles', payload => {
    fileNamespace.emit('gimmeFiles', payload);
  });

});


// --------------------------------------------------------------
// Namespace - Work
// --------------------------------------------------------------

const workNamespace = server.of('/work');

workNamespace.on('connection', () => {
  console.log('Someone has connected to the work namespace');
});

console.log('Server is up on port 3000');