'use strict';

const mongoose = require('mongoose');
require('../products/schema.js');

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

categorySchema.virtual('products', {
  ref: 'Products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

const PRODUCTJOIN = `
  SELECT product.name, category.name 
  FROM categories
  INNER JOIN products
  ON name = category
`

categorySchema.pre('find', async function () {
  try {
    this.populate('products');
  }
  catch (e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('Categories', categorySchema);