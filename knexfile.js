var path = require( "path" );

module.exports = {
    "client": "postgres",
    "connection": {
        "database": "bookstore_db",
        "host": "db",
        "password": "mysecretpassword",
        "user": "bookstore_user"
    },
    "migrations": {
        "directory": path.resolve( "./src/db/migrations" )
    },
    "seeds": {
        "directory": path.resolve( "./src/db/seeds" )
    }
};
