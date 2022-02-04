'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Plans',
      [
        {
          coverage: 'Total',
          price: 549.99,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        }, {
          coverage: 'Partial',
          price: 349.99,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        },
        {
          coverage: 'Emergencies only',
          price: 109.99,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        },
        {
          coverage: 'Family',
          price: 949.99,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plans', null, {});
  },
};



