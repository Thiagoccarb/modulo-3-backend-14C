const { Patient_surgeries } = require('../models');

const createPatientSurgery = async (patient_id, surgery_id) => {
  try {
    const newPatientSurgery = await Patient_surgeries.build({ patient_id, surgery_id });
    await newPatientSurgery.save()
    return newPatientSurgery;
  } catch (err) {
    console.log(err)
    return null
  }
};

const getPatientSurgery = async () => {
  const patients = await Patient_surgeries.findAll();
  return patients;
};

module.exports = {
  createPatientSurgery,
  getPatientSurgery,
}