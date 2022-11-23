const express = require('express');
const booksController = require('./controllers/books.controller')
const PORT  = process.env.PORT || 3005;
const app = express();

app.use(express.json())

app.get('/books', booksController.getAllBooks);

app.get('/books/:id', booksController.getBookById)

app.post('/books', booksController.addNewBook);

app.put('/books/:id', booksController.updateBook);

app.delete('/books/:id', booksController.deleteBook)

app.listen(PORT, () => {
  console.log('Rodando na porta:', PORT);
})