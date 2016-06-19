'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://sang.tran:ttran1121@ds023432.mlab.com:23432/todo_123', function(err){
	if(err){
		console.log('error connecting to mongodb');
	} else {
		console.log('success to connect to mongo');
	}
});