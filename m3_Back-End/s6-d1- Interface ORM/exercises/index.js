const express = require('express');
const booksController = require('./controllers/books.controller')
const PORT  = process.env.PORT || 3005;
const app = express();

app.use(express.json())

app.get('/books', booksController.getAllBooks);

app.listen(PORT, () => {
  console.log('Rodando na porta:', PORT);
})