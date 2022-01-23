module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
    {
      timestamps: false,
      tableName: 'members',
    });

  return Member;
};