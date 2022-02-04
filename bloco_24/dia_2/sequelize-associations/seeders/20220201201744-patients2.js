'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Patients',
      [
        {
          name: 'Alberto Dos Santos',
          plan_id: 1,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        }, {
          name: 'Maria Silveira Rodrigues',
          plan_id: 3,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        },
        {
          name: 'Osvaldo de Andrade',
          plan_id: 3,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        },
        {
          name: 'Cristiano Ronaldo Messi',
          plan_id: 2,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',

        },
        {
          name: 'Luis Carlos Suarez',
          plan_id: 3,
          created_at: '2022-01-02',
          updated_at: '2022-01-02',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients', null, {});
  },
};
