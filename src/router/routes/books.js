var { Books } = require( "../../models" );

module.exports = function bookRouter( router ){
    router.get(
        "/books",
        async( req, res ) => {
            var books = await Books.query();

            res.send( books || [] );
        }
    );

    router.get(
        "/books/:id",
        async( req, res ) => {
            var { id } = req.params;
            const book = await Books
                .query()
                .findById( id );

            res.send( book || [] );
        }
    );
};
