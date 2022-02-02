'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specialty: {
      type: DataTypes.STRING,
    },
    doctor: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: '',
    },
  },
    {
      timestamps: false,
      underscore: true,
    });

  return Surgery;
};