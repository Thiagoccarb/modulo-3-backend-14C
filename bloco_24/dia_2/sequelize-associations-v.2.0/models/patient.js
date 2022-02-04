'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plan_id: {
      allowNull:false,
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.STRING,
      defaultValue: '-',
    },
  },
    {
      timestamps: false,
      underscore: true,
    });

    Patient.associate = (models) => {
      Patient.belongsTo(models.Plan, { as: 'plan', foreignKey: 'plan_id' })
    }

    return Patient;
};