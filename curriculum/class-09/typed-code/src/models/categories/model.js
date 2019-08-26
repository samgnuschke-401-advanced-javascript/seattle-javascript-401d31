'use strict';

const Model = require('../mongo.js');
const categoriesSchema = require('./schema.js');

/** Class representing a generic category model. */
class Categories extends Model {

  /**
  * Model Constructor
  * @param schema {object} - mongo schema
  */
  constructor() {
    super(categoriesSchema)
  }
}

module.exports = Categories;