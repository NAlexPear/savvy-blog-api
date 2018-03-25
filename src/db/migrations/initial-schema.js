exports.up = async function migrateUp( knex ){
    await knex
        .schema
        .createTableIfNotExists(
            "book",
            ( table ) => {
                table.increments( "id" ).primary();
                table.string( "creator" );
                table.string( "image" );
                table.float( "price" );
                table.specificType( "selling_points", "text[]" ).default( "{}" );
                table.string( "title" );
                table.enu( "type", [ "book" ] );
            }
        )
        .createTableIfNotExists(
            "album",
            ( table ) => {
                table.increments( "id" ).primary();
                table.string( "creator" );
                table.string( "image" );
                table.float( "price" );
                table.specificType( "selling_points", "text[]" ).default( "{}" );
                table.string( "title" );
                table.enu( "type", [ "album" ] );
            }
        );
};

exports.down = function migrateDown( knex ){
    return knex
        .schema
        .dropTableIfExists( "book" )
        .dropTableIfExists( "album" );
};
