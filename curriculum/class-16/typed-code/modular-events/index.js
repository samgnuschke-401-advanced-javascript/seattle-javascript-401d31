'use strict';

const events = require('./events.js');
require('./cache.js');
require('./logger.js');

events.emit('save', { id: 101 });
events.emit('delete', { id: 101 });