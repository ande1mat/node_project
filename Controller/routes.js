/**
 * http://usejsdoc.org/
 */

//Add Dependencies
var express = require('express');
var router = express.Router();
var pdb = require('../database'); 

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
    res.send('puppies home page');
	console.log("puppies home page route")
});

// define the about route
router.get('/about', function(req, res) {
    res.send('About puppies');
	console.log("puppies about page route")
});


//define the allpups route
router.get('/allpups', function(req, res) {
	
	  pdb.any('select * from pups')
	    .then(function (data) {
	      res.status(200)
	        .json({
	          status: 'success',
	          data: data,
	          message: 'Retrieved ALL puppies'
	    })
	console.log("allpups route")
	});
	  
	
});

//Export the Route object to the Server.js
module.exports = router;

