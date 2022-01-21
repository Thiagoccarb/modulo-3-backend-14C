module.exports = (sequelize, DataTypes) => {
  const Patient_surgery = sequelize.define(
    'Patient_surgery',
    {},
    { timestamps: false },
  );

  Patient_surgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: Patient_surgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: Patient_surgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return Patient_surgery;
};