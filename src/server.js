'use strict';

var express = require('express');

var parser = require('body-parser');
//from index.js 
var router = require('./api');
var app = express();

require('./database');
require('./seed')
app.use('/',express.static('public'));

app.use(parser.json());

app.use('/api', router);


app.listen(process.env.PORT || 3000,function(){
	console.log('listening to port 3000');
})