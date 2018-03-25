var Product = require( "./product" );

module.exports = class Album extends Product{
    static get tableName(){
        return "album";
    }
};
