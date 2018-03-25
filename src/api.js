var bodyParser = require( "body-parser" );
var express = require( "express" );
var { Model } = require( "objection" );
var router = require( "./router" );

module.exports = class Api{
    constructor( knex ){
        Model.knex( knex );

        this.app = express()
            .use( bodyParser.json() )
            .use( router );
    }

    start( port ){
        return this.app.listen(
            port,
            /* eslint-disable no-console */
            () => console.log( `Listening on port ${port}` )
        );
    }
};
