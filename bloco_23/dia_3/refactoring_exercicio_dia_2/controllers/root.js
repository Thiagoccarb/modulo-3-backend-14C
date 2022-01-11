const express = require('express');

const root = express.Router(
  {
    mergeParams: true,
  }
);

root.use('/', require('./router'));

module.exports = root;