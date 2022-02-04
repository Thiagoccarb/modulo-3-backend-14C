const { createPatients, getAllPatients, getAllPatientsInfo } = require('./patients');
const { createPlan } = require('./plans');
const { createSurgery } = require('./surgeries');
const { createPatientSurgery, getPatientSurgery } = require('./patient-surgeries');



module.exports = {
  createPatients,
  createPlan,
  createSurgery,
  createPatientSurgery,
  getAllPatients,
  getAllPatientsInfo,
  getPatientSurgery,
}