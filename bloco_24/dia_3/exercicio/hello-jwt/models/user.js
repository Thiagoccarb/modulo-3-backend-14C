module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    admin: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    tableName: 'users',
    underscored: true,
  });

  return User;
};