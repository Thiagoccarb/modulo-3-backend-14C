const Service = require('../../services');

const CREATED = 201;
const OK = 200;

const create = async (req, res, next) => {
  try {
    const { name, plan_id } = req.body;
    const newPatient = await Service.createPatients(name, plan_id);
    return res.status(CREATED).json(newPatient);
  } catch (err) {
    next(err);
  }
}

const getAll = async (_req, res, next) => {
  try {
    const patients = await Service.getAllPatients();
    return res.status(OK).json(patients);
  } catch (err) {
    next(err);
  }
}

const getAllPatientsInfo = async (_req, res, next) => {
  try {
    const patientsAndPlans = await Service.getAllPatientsInfo();
    return res.status(OK).json(patientsAndPlans);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create,
  getAll,
  getAllPatientsInfo
}