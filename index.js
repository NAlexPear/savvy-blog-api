var faker = require('faker');
var _ = require('lodash');

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
    ));;
}

module.exports = () => ({
  "books": generateItems('book'),
  "music": generateItems('music')
});
