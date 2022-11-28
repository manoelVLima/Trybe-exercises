'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_books', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users', // essa model se refere a model do arquivo ou ao nome da tabela no sql??
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'books',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users_books');
  }
};
