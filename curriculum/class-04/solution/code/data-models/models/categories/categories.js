'use strict';

const DataModel = require('../model.js');

const schema = {
  name: 'categories',
  fields: {
    id: {required: true},
    name: {required: true},
  },
};

class Categories extends DataModel {
  constructor() {
    super(schema);
  }
}

module.exports = Categories;
