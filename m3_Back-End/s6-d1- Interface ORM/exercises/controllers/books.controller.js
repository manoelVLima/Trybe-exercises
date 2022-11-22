const booksService = require('../services/books.service');

const getAllBooks = async (_req, res) => {
  try {
    const books = await booksService.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message,'Algo de errado aconteceu');
    return res.status(500).json({message: 'ERROR NA REQUISIÇÃO'});
  }
};

module.exports = {
  getAllBooks,
}