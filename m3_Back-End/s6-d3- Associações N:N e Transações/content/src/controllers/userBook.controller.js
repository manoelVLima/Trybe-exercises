const userBookService = require('../services/userBook.service');

const getUserBooksById = async (req, res) => {
  const { id } = req.params;

  try {
    const userBooks = await userBookService.getUserBooksById(id);

    if(!userBooks) return res.status(400).json({message: 'Book not found!'});

    res.status(200).json(userBooks);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'BAD_REQUEST'});
  }
}

module.exports = {
  getUserBooksById
}