var faker = require('faker');

function generateSellingPoints(){
  var sellingPoints = new Array(3);

  return sellingPoints
    .fill('')
    .map(() => faker.lorem.sentence())
}

function generateItems(type){
  var items = new Array(20);

  return items
    .fill({})
    .map(item => Object.assign(
      item,
      {
        type,
        "name": faker.lorem.sentence(),
        "author": faker.fake("{{name.firstName}} {{name.lastName}}"),
        "picture": faker.image.imageUrl(),
        "price": faker.commerce.price(),
        "sellingPoints": generateSellingPoints()
      }
    ));;
}

module.exports = () => ({
  "books": generateItems('book'),
  "music": generateItems('music')
});
