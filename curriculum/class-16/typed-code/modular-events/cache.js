'use strict';

const events = require('./events.js');
events.on('save', handleSave);
events.on('delete', handleDelete);

function handleSave(payload) {
  console.log(`You saved ${payload.id}`);

  events.emit('cache-update', { id: payload.id });
};

function handleDelete(payload) {
  console.log(`You deleted ${payload.id}`);

  events.emit('cache-update', { id: payload.id });
};

module.exports = {
  handleSave,
  handleDelete,
}
