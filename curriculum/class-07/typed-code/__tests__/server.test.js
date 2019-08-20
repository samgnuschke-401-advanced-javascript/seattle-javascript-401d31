'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Testing server', () => {
  it('Can make a GET to /posts', () => {

    return mockRequest
      .get('/posts')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
});
