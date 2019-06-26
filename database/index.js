const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/reviews", { useNewUrlParser: true })
  .then(() => {
    console.log("db connected");
  })
  .catch(err => {
    console.log("connection error", err);
  });

let ReviewSchema = mongoose.Schema;

const reviewServiceSchema = new ReviewSchema({
  id: Number,
  property_id: Number,
  avatar: String,
  reviewer: String,
  stars: Number,
  date: String,
  body: String
});

let Review = mongoose.model("Review", reviewServiceSchema);

let BookSchema = mongoose.Schema;

const bookSchema = new BookSchema({
  id: Number,
  book: String,
  author: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { reviewServiceSchema, Review };
