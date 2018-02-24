/**
 * http://usejsdoc.org/
 */

//Setup the connection to Postgres
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://postgres:target@localhost/puppies')

//Export this module for use by other node objects
module.exports = db;
