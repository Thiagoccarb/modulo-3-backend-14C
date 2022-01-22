module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'admin', {
      type: Sequelize.BOOLEAN,
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('users', 'admin');
  },
};
