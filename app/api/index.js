'use strict';

var express = require('express');
var app = module.exports = express();

app.get('/api', function(req, res) {
  res.json({
    api: 'hello form api'
  });
});
