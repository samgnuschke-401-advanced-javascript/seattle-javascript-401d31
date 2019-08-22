'use strict';

const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }
});

module.exports = mongoose.model('Things', thingSchema);