'use strict';

const { DataTypes } = require("sequelize/dist");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surgeries', {
      surgery_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialty: {
        type: Sequelize.STRING,
      },
      doctor: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Surgeries');
  }
};