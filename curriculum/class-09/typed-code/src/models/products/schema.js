'use strict';

const mongoose = require('mongoose');
const Category = require('../categories/schema.js');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    required: true,
  }
});

productSchema.post('save', async function (doc) {
  console.log(Category);
  try {
    const cat = await Category.findOne({ name: doc.category });
    if (!cat) {
      const newCat = new Category({ name: doc.category, description: `A category for ${doc.name}` });
      await newCat.save();
    }
  } catch (e) {
    console.error(`ERROR ${e}`);
  }
})

module.exports = mongoose.model('Products', productSchema);