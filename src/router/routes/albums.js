var { Albums } = require( "../../models" );
var { snakeCase, mapKeys } = require( "lodash/fp" );

module.exports = function albumRouter( router ){
    router.get(
        "/albums",
        async( req, res ) => {
            var albums = await Albums.query();

            res.send( albums || [] );
        }
    );

    router.get(
        "/albums/:id",
        async( req, res ) => {
            var { id } = req.params;
            const album = await Albums
                .query()
                .findById( id );

            res.send( album || [] );
        }
    );

    router.post(
        "/albums",
        async( req, res ) => {
            var { body } = req;

            var album = await Albums
                .query()
                .insert( mapKeys( snakeCase )( body ) );

            res.send( album );
        }
    );
};
