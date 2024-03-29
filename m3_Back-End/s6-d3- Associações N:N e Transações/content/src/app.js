const express = require('express');
const app = express();

const userBookController = require('./controllers/userBook.controller')

app.use(express.json());

app.get('/userbooks/:id', userBookController.getUserBooksById);

module.exports = app;