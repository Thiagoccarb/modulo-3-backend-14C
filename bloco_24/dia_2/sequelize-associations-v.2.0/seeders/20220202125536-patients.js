'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'patients',
      [
        {
          id: 1,
          name: 'Alberto Dos Santos',
          created_at:'2022-02-02',
          updated_at: '-',
        }, {
          id: 3,
          name: 'Maria Silveira Rodrigues',
          created_at:'2022-02-02',
          updated_at: '-',
        },
        {
          id: 3,
          name: 'Osvaldo de Andrade',
          created_at:'2022-02-02',
          updated_at: '-',
        },
        {
          id: 2,
          name: 'Cristiano Ronaldo Messi',
          created_at:'2022-02-02',
          updated_at: '-',
        },
        {
          id: 3,
          name: 'Luis Carlos Suarez',
          created_at:'2022-02-02',
          updated_at: '-',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('patients', null, {});
  },
};
