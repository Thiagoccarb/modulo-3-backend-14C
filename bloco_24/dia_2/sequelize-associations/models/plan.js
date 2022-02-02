'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    coverage: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  },
    {
      timestamps: false,
      underscore: true,
    });

  Plan.associate = (models) => {
    Plan.hasOne(models.Patient, { as: 'patient', foreignKey: 'plan_id' })
  }

  return Plan;
};