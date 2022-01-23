module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('users', 'created_at');
},

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'created_at', {
      type: Sequelize.BOOLEAN,
    });
  },
};
