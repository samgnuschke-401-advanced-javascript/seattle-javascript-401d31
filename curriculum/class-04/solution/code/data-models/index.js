'use strict';

const faker = require('faker');

const CategoryModel = require('./models/categories/categories.js');

const categories = new CategoryModel();

const cat = {name:faker.commerce.department()}

let instance;

categories.create(cat)
  .then( data => {
    instance = data;
    console.log(instance);
    return categories.get();
  })
  .then(data => {
    console.log(data);
    instance.name = faker.commerce.department();
    return categories.update(instance.id, instance);
  })
  .then( data => categories.get() )
  .then( data => {
    console.log(data);
    return categories.delete(instance.id);
  })
  .then( data => categories.get() )
  .then( data => console.log(data) )
  .catch( console.error );
