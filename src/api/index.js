'use strict';

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos',function(req,res){
	Todo.find({},function(err,todos){
		if(err){
			//do something
			return res.status(500).json({message: err.message});
		}
		res.json({todos:todos});
	})
	
});


//TODO add post route to create new entries
//TODO add put route to update
//TODO add delete route

module.exports = router;