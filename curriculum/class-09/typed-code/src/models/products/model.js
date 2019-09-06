'use strict';

const Model = require('../mongo.js');
const productsSchema = require('./schema.js');

/** Class representing a generic category model. */
class Products extends Model {

  /**
  * Model Constructor
  * @param schema {object} - mongo schema
  */
  constructor() {
    super(productsSchema)
  }
}

module.exports = Products;