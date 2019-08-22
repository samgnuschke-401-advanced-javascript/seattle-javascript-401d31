'use strict';

const express = require('express');
const app = express();

const hrRoutes = require('../routes/hr');
const salesRoutes = require('../routes/sales');

app.use('/hr', hrRoutes);
app.use('/sales', salesRoutes);

// app.get('/pets', getPetById);
// app.get('/kali', getKali);
//
// function getKali(request, response) {
//   console.log('param', request.params);
//   console.log('query', request.query);
//
//   response.status(200).send('200'); // OK n_n
// }
//
// function getPetById(request, response) {
//   console.log('param', request.params);
//   console.log('query', request.query);
//
//   response.status(200).send('200'); // OK n_n
// }

module.exports = {};

module.exports.server = app; // Vinicio - we do this in order to TDD

module.exports.start = port => {
  const PORT = port || process.env.PORT || 3000;

  app.listen(PORT, () => console.log(`Server is up at port ${PORT}`));
};

// module.exports.stop = () => {};
