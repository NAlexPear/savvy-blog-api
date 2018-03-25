var Product = require( "./product" );

module.exports = class Book extends Product{
    static get tableName(){
        return "book";
    }
};
