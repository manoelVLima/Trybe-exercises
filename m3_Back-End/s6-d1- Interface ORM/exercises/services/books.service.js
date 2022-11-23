const booksModel = require('../models/index');


const getByAuthor = async (author) => {
  const books = await booksModel.Book.findAll({where: { author }}, {order: ['title','ASC']});

  return books;
}

const getAllBooks = async (author) => {

  if(author.length) {
    console.log('teste');
    const books = await getByAuthor(author);
    return books;
  }

  const books = await booksModel.Book.findAll({order: [['title','ASC']]});
  return books;
};

const getBookById = async (id) => {
  const book = await booksModel.Book.findByPk(id);
  return book;
};

const addNewBook = async (title, author, pageQuantity) => {
  const newBook = await booksModel.Book.create({title, author, pageQuantity})
  return newBook;
};

const updateBook = async (id, title,author, pageQuantity) => {
  const [updated] = await booksModel.Book.update({title, author, pageQuantity}, {where: { id }})

  return updated;
};

const deleteBook = async (id) => {
  const deleteBook = await booksModel.Book.destroy({where: {id}},);

  return deleteBook;
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook, 
  updateBook,
  deleteBook,
  getByAuthor

}