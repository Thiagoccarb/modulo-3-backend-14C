'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('patients', {
      type: 'foreign key',
      fields: ['plan_id'],
      references: {
        table: 'plans',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('patients', 'plan_id')
  }
};
