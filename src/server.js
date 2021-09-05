'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const notFoundHandler = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');

const foodRoute = require('./routes/Products');
const clothesRoute = require('./routes/clothes.js');
app.get('/', (req, res) => {
  res.json('welcome');
});
app.use('/api/v1/Products', foodRoute);
app.use('/api/v1/clothes', clothesRoute);

app.use(errorHandler);
app.use('*', notFoundHandler);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};
