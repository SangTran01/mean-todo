'use strict';

var express = require('express');
var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos',function(req,res){
	res.send({todos:todos});
});


//TODO add post route to create new entries
//TODO add put route to update
//TODO add delete route

module.exports = router;