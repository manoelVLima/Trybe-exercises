const { Book } = require('../models/index');

const getAllBooks = async () => {
  const books = await Book.findAll();
  console.log(books);

  return books;
}
module.exports = {
  getAllBooks,
}