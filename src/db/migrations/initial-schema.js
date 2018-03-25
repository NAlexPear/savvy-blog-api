exports.up = async function migrateUp( knex ){
    await knex
        .schema
        .createTableIfNotExists(
            "book",
            ( table ) => {
                table.increments( "id" ).primary();
                table.string( "creator" );
                table.string( "image" );
                table.enu( "type", [ "book" ] );
                table.specificType( "selling_points", "jsonb[]" ).default( "{}" );
            }
        );
};

exports.down = function migrateDown( knex ){
    return knex
        .schema
        .dropTableIfExists( "books" );
};
