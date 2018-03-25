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
                "selling_points": {
                    "type": "array"
                },
                "type": {
                    "type": "string"
                }
            },

            "required": [ "creator", "image", "type" ]
        };
    }
};
