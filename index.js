var faker = require( "faker" );
var _ = require( "lodash/fp" );

var books = [
    {
        "type": "book",
        "id": 1,
        "name": "The Desire Map",
        "author": "Danielle LaPorte",
        "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/41BhS87QXrL._SX258_BO1,204,203,200_.jpg",
        "price": 6.32,
        "sellingPoints": [
            "Self Help",
            "Inspiration",
            "Coding"
        ]
    },
    {
        "type": "book",
        "id": 2,
        "name": "Savvy Coding For Dummies",
        "author": "Alex Pearson",
        "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51q-YHB62GL._SX258_BO1,204,203,200_.jpg",
        "price": 1799.00,
        "sellingPoints": [
            "Tech Help",
            "Web Design",
            "Coding"
        ]
    },
    {
        "type": "book",
        "id": 3,
        "name": "The Monster at the End of This Book",
        "author": "Jon Stone",
        "pictureUrl": "http://smollin.com/michael/tmonstr/mon001.jpg",
        "price": 6.32,
        "sellingPoints": [
            "Timeless",
            "Interactive",
            "Coding"
        ]
    }
];

var generateSellingPoints = _.pipe(
    _.range( 0 ),
    _.map( () => faker.lorem.sentence() )
);

function generateItems( type ){
    return _.pipe(
        _.range( books.length + 1 ),
        _.map( ( id ) => (
            {
                type,
                id,
                "name": faker.lorem.sentence(),
                "author": faker.fake( "{{name.firstName}} {{name.lastName}}" ),
                "picture": faker.image.imageUrl(),
                "price": faker.commerce.price(),
                "sellingPoints": generateSellingPoints( 3 )
            }
        ) )
    )( 20 );
}

module.exports = () => ( {
    "books": [ ...books, ...generateItems( "book" ) ],
    "music": generateItems( "music" )
} );
