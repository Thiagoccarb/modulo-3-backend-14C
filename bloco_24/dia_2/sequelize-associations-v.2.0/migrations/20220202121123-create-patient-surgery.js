'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patient_surgeries', {
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      surgery_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'surgeries',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patient_surgeries');
  },
};
