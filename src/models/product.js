var { Model } = require( "objection" );

module.exports = class Product extends Model{
    static get jsonAttributes(){
        return [];
    }

    static get jsonSchema(){
        return {
            "properties": {
                "creator": {
                    "type": "string"
                },
                "image": {
                    "type": "string"
                },
                "price": {
                    "type": "float"
                },
                "selling_points": {
                    "type": "array"
                },
                "title": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                }
            },

            "required": [
                "creator",
                "image",
                "price",
                "title",
                "type"
            ]
        };
    }
};
