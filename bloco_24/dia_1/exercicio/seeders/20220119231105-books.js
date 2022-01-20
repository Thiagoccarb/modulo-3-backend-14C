'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O cravo e a rosa',
        author: 'teste',
        page_Quantity: 400,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Pequeno príncipe',
        author: 'teste2',
        page_Quantity: 400,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {})
  }
};
