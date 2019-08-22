'use strict';

const express = require('express');
const app = express();

// Vinicio - this line assumes you export a router
const productRoutes = require('../routes/products');

app.use(express.json());

// vinicio - this could be refactored ;) ;)
app.use(productRoutes);

module.exports = {};
module.exports.server = app; // Vinicio - this line gets de-structured

module.exports.start = port => {
  const PORT = port || process.env.PORT || 3000;

  app.listen(PORT, () => console.log(`Server is up at port ${PORT}`));
};
