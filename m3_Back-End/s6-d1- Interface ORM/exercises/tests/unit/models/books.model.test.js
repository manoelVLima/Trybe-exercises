// tests/unit/models/user.test.js

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BooksModel = require('../../../models/books.model');

describe('O model de Books', () => {
  const Books = BooksModel(sequelize, dataTypes);
  const books = new Books();

  describe('possui o nome "Book"', () => {
    checkModelName(Books)('Book');
  });

  describe('possui as propriedades "title" e "publisher"', () => {
    ['title', 'publisher'].forEach(checkPropertyExists(books));
  });
});