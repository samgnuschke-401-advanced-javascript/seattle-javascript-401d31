'use strict';

const express = require('express');
const router = express.Router();

router.get('/users/:id', getUsers);
router.get('/kali', getKali);

function getUsers(request,response,next) {
  response.status(200).send('SALES');
}

function getKali(request, response) {
  console.log('param', request.params);
  console.log('query', request.query);

  response.status(200).send('200 -- SALES'); // OK n_n
}

module.exports = router;

