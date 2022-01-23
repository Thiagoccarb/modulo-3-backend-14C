module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('users', 'update_at');
},

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'update_at', {
      type: Sequelize.BOOLEAN,
    });
  },
};
