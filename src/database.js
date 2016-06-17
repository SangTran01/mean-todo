'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err){
	if(err){
		console.log('error connecting to mongodb');
	} else {
		console.log('success to connect to mongo');
	}
});