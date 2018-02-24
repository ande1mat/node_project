
// BASIC NODE SERVER SIDE CODE FOR REST API

/* START the NODE Server 'node server.js' from the directory where server or app .js lives
 * STOP the NODE Server 'Control Button 
 * npm install will ensure you have all the node modules required locally...
 */

//AddModule dependencies. 
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

//Define Application object
var app = express();


// Assign App Port Number
app.set('port', process.env.PORT || 3000);


//Set up the Routes in the Controller
var puproute = require('./controller/routes.js');
app.use('/puppies', puproute);

//Create the Node Express Server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Node Express server listening on port ' + app.get('port'));
});


