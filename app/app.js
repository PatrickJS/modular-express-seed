var express = require('express');
var app = express();


var database = require('../database');
var admin = require('./admin');
var api = require('./api');
var www = require('./www');


// order matters
app.use(database);
app.use(api);
app.use(www);
app.use(admin);

app.set('view engine', 'jade');

app.listen(8080, function() {
  console.log('Server running');
});
