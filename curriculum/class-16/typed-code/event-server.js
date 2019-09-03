'use strict';

const EventEmitter = require('events');

const events = new EventEmitter();

// .on tells the emitter to do something for a given event

// .emit tells the emitter to emit an event accross the WHOLE emitter instance

events.on('save', handleSave);
events.on('update', (payload) => {
  console.log(`You updated ${payload.id}`);
});
events.on('delete', (payload) => {
  console.log(`You deleted ${payload.id}`);
});

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);

  events.emit('update', payload);
}


events.emit('save', { id: 100 });