'use strict';

var express = require('express');
//from index.js 
var router = require('./api');
var app = express();

require('./database');

app.use('/',express.static('public'));

app.use('/api', router);


app.listen(3000,function(){
	console.log('listening on port 3000');
});