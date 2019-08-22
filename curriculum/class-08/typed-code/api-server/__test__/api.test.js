'use strict';

const {server} = require('../lib/server.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('Products API', () => {
  test('Creating a new product should return 201 and the created object', () => {
    const testProduct = {
      name: 'Insomnia',
      description: 'An OK book',
      price: 10,
      category: 'books'
    };

    return mockRequest.post('/api/v1/products')
      .send(testProduct)
      .then(response => {
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('Insomnia');
      });
  });
});



// const f2 = function(a) {
//   return function(b){
//     return function(c) {
//       return a + b +c;
//     }
//   }
// };