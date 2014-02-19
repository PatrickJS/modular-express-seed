
var express = require('express');
var app = module.exports = express();

app.get('/admin', function(req, res) {
  res.render('admin');
});
