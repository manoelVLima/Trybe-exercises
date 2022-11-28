const { User, Book } = require('../models')

const getUserBooksById = async (id) => {
  const userBooks = await User.findOne({
    where: { id }, include: { model: Book, as: 'books', through: { attributes: [] } }
  })

  return userBooks;
};

module.exports = {
  getUserBooksById
}