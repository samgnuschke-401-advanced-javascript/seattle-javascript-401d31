'use strict';

const validator = require('../lib/validator');

describe('#validator', () => {
  describe('#isLessThanTen', () => {
    test('regular cases', () => {
      expect(validator.isLessThanTen(5)).toEqual(true);

      expect(validator.isLessThanTen(11)).toEqual(false);
      expect(validator.isLessThanTen(10)).toEqual(false);

      expect(validator.isLessThanTen(-1)).toEqual(true);
    });
  });

  describe('#isObjectValid', () => {
    test('regular cases', () => {
      const schema = {
        fields: {
          id: {type: 'string'},
          age: {type: 'number'},
          favoriteToys: {type: 'object'}
        },
      };
      expect(validator.isObjectValid(
        {id: 'kali', age: 2, favoriteToys: {}},schema
      )).toEqual(true);

      // expect(validator.isObjectValid(
      //   {id: 1, age: 'banana', favoriteToys: []},schema
      // )).toEqual(false);
    });
  });
});















