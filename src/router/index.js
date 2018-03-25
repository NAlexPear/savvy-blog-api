var routers = require( "./routes" );
var { flow, over, values } = require( "lodash/fp" );
var PromiseRouter = require( "express-promise-router" );

var router = new PromiseRouter();

flow( values, over )( routers )( router );

module.exports = router;
