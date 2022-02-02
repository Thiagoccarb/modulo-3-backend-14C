'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Patients', {
      type: 'foreign key',
      fields: ['plan_id'],
      references: { //Required field
        table: 'Plans',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Patients', 'plan_id');
  }
};
