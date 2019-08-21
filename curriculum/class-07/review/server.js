'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const routes = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(routes);
server.use(middlewares);
server.listen(3000, () => {
  console.log('JSON server is running');
});