'use strict';

const validator = module.exports = {};

validator.isLessThanTen = (input) => {
  return input < 10;
};

validator.isFunction = () => {};

validator.isObjectValid = (data, schema) => {
  // Vinicio - let's list the assumptions we have so far
  // data is going to be an object
  // schema is going to be an object that has a property called fields
  // TODO: Validate our invariants
  Object.keys(schema.fields).forEach(expectedProperty => {
    if (!data.hasOwnProperty(expectedProperty)) {
      return false;
    }
    // TODO: Add type validation
    // expectedProperty = 'id'
    console.log(data[expectedProperty]); // Value
    console.log(schema.fields[expectedProperty].type); // Type
    // is the value correct based on the type?
  });
  return true;
};

