const { Patient, Plan, Surgery, Patient_surgeries } = require('../models');

const createPatients = async (name, plan_id) => {
  const newPatient = await Patient.create({ name, plan_id });
  return newPatient;
};

const getAllPatients = async () => {
  const patients = await Patient.findAll();
  return patients;
};

const getAllPatientsInfo = async () => {
  const patientsAndPlans = await Patient.findAll({
    include: [
      { model: Plan, as: 'plan', attributes: { exclude: ['updated_at', 'id'] } },
      { model: Surgery, as: 'surgeries', through: { attributes: [] } },
    ] //EAGER LOADING
  });
  return patientsAndPlans;
};

module.exports = {
  createPatients,
  getAllPatients,
  getAllPatientsInfo,
}