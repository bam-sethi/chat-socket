var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

//middleware
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));