var faker = require('faker');
var _ = require('lodash');

var books = [
  {
      "name": "Adorable Puppies",
      "author": "Binkey McGillocuddy",
      "picture": "http://wallpapercave.com/wp/N2lOzO4.jpg",
      "price": 9.95,
      "sellingPoints": [
          "Pugs Rule",
          "Pugs are Sweet",
          "Everybody Loves Pugs"
      ]
  },
  {
      "name": "Granite City Soul Suckers",
      "author": "Bela Lugosi",
      "picture": "http://medias.photodeck.com/abc3ec2e-e46d-11e0-8813-0175b4d176d6/100514_IND_003_xgaplus.jpg",
      "price": 2.00,
      "sellingPoints": [
          "If you Haven't Been, Don't Go",
          "Get Mugged Fast",
          "Steal Your Car"
      ]
  },
  {
      "name": "JavaScript is SAVVY",
      "author": "Benevolent Dictator",
      "picture": "https://www.codementor.io/assets/page_img/learn-javascript.png",
      "price": 45.99,
      "sellingPoints": [
          "Learn JavaScript",
          "Survive Your First ReFactor",
          "Free Coffee"
      ]
  },
  {
      "name": " Monty Python (the Expurgated Version)",
      "author": "Noel HamWrapper",
      "picture": "http://media.topito.com/wp-content/uploads/2014/10/python1.jpg",
      "price": 30.00,
      "sellingPoints": [
          "Toupee Spam Muppet",
          "Decal Slide Off My Car",
          "Whatever You Can Steal"
      ]
  },
  {
      "name": " Monty Python 2: Electric Boogaloooo",
      "author": "Noel HamWrapper",
      "picture": "http://media.topito.com/wp-content/uploads/2014/10/python1.jpg",
      "price": 50.00,
      "sellingPoints": [
          "Toupee Spam Muppet",
          "Decal Slide Off My Car",
          "Whatever You Can Steal",
          "Look, another selling point!"
      ]
  }
];

function generateSellingPoints(){
  return _.range(3)
    .fill('')
    .map(() => faker.lorem.sentence())
}

function generateItems(type){
  return _.range(20)
    .map(id => (
      {
        type,
        "id": id + 1,
        "name": faker.lorem.sentence(),
        "author": faker.fake("{{name.firstName}} {{name.lastName}}"),
        "picture": faker.image.imageUrl(),
        "price": faker.commerce.price(),
        "sellingPoints": generateSellingPoints()
      }
    ));
}

module.exports = () => ({
  "books": [...books, ...generateItems('book')],
  "music": generateItems('music')
});
