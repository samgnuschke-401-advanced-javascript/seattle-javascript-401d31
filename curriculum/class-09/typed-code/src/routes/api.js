'use strict';

// what libraries?
const express = require('express');

const modelLoader = require('../middleware/model-loader.js');

const router = express.Router();

router.param('model', modelLoader);

router.get('/api/v1/:model', handleGetAll);
router.get('/api/v1/:model/:id', handleGetOne);
router.post('/api/v1/:model', handleCreate);
router.put('/api/v1/:model/:id', handleUpdate);
router.delete('/api/v1/:model/:id', handleDelete);

function handleGetAll(request, response, next) {
  request.model.get()
    .then(results => {
      const data = {
        count: results.length,
        results
      }
      return response.status(200).json(data);
    })
    .catch(next)
}

function handleGetOne(request, response, next) {
  request.model.get(request.params._id)
    .then(results => response.status(200).json(results))
    .catch(next);
}

function handleCreate(request, response, next) {
  request.model.create(request.body)
    .then(results => response.status(201).send(results))
    .catch(next);
}

function handleUpdate(request, response, next) {
  request.model.update(request.params.id, request.body)
    .then(results => response.status(200).send(results))
    .catch(next);
}

function handleDelete(request, response, next) {
  request.model.delete(request.params.id)
    .then(results => response.status(200).json(results))
    .catch(next);
}

module.exports = router;