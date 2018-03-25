var API = require( "./src/api" );
var knex = require( "./src/db" );

const app = new API( knex );

app.start( 3000 );
