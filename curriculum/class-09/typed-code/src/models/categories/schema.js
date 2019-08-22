'use strict';

const mongoose = require('mongoose');
require('../things/schema.js');

// What fields and constraints do we want?
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  });

categorySchema.virtual('tests', {
  ref: 'Things',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

categorySchema.pre('find', async function () {
  try {
    this.populate('tests');
  }
  catch (e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('categories', categorySchema);