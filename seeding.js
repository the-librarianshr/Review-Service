const { reviewServiceSchema, Review } = require("./database/index.js");
const faker = require("faker");
// const save = require("/Users/roman/Desktop/rpt14-front-end-capstone/database/index.js");

console.log("Review", Review);

let save = (id, property_id, avatar, reviewer, stars, date, body) => {
  console.log(`save running ${id}`);
  let newReview = new Review({
    id: id,
    property_id: property_id,
    avatar: avatar,
    reviewer: reviewer,
    stars: stars,
    date: date,
    body: body
  });
  newReview.save().catch(err => {
    console.log("does this work?");
    if (err) {
      console.log(err);
    } else {
      console.log("saved to db");
    }
  });
};

for (let i = 1; i < 501; i++) {
  const id = i;
  const property_id = Math.floor(Math.random() * 100);
  const avatar = faker.image.avatar();
  const reviewer = faker.name.findName();
  const stars = faker.random.number({
    min: 0,
    max: 5
  });
  const date = `${faker.date.month()} ${faker.random.number({
    min: 1,
    max: 28
  })}, ${faker.random.number({
    min: 2013,
    max: 2018
  })}`;
  const body = faker.lorem.paragraph((sentence_count = 6));
  save(id, property_id, avatar, reviewer, stars, date, body);
}
