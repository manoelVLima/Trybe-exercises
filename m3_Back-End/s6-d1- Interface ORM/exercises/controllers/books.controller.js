const booksService = require('../services/books.service');

const getAllBooks = async (req, res) => {
  const { author } = req.query

  try {
    const books = await booksService.getAllBooks(author);
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message,'Algo de errado aconteceu');
    return res.status(500).json({message: 'ERROR NA REQUISIÇÃO'});
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await booksService.getBookById(id)
    
    if(!book) return res.status(400).json({message: 'Book not found!'});

    return res.status(200).json(book);

  } catch (error) {
    console.log(error.message,'Algo de errado aconteceu');
    return res.status(500).json({message: 'ERROR NA REQUISIÇÃO'});
  }
}

const addNewBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  try {
    const newBook = await booksService.addNewBook( title, author, pageQuantity );

    return res.status(201).json(newBook)
  } catch (error) {
    console.log(error.message,'Algo de errado aconteceu');
    return res.status(500).json({message: 'ERROR NA REQUISIÇÃO'});
  }
};

const updateBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;

  try {
    const updated = await booksService.updateBook( id, title, author, pageQuantity );

    if(!updated) return res.status(400).json({message: 'Book not found!'});

    return res.status(201).json({message: 'The book was successfully updated!'})
  } catch (error) {
    console.log(error.message,'Algo de errado aconteceu');
    return res.status(500).json({message: 'ERROR NA REQUISIÇÃO'});
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteBook = await booksService.deleteBook(id);

    if(!deleteBook) return res.status(400).json({message: 'Book not found!'});

    return res.status(201).json({message: 'The book was successfully deleted!'})
  } catch (error) {
    console.log(error.message,'Algo de errado aconteceu');
    return res.status(500).json({message: 'ERROR NA REQUISIÇÃO'});
  }
}

// const getByAuthor = async (req, res) => {
//   const { author } = req.query;
//   try {
//     const books = await booksService.getByAuthor(author);

//     if(!books) return res.status(400).json({message: 'Books not found'})

//     return res.status(200).json(books);
//   } catch (error) {
//     console.log(error.message,'Algo de errado aconteceu');
//     return res.status(500).json({message: 'ERROR NA REQUISIÇÃO'});
//   }
// }

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
}