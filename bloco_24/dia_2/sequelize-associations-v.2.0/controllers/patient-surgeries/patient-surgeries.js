const Service = require('../../services');

const OK = 200;
const CREATED = 201;

const create = async (req, res, next) => {
  try {
    const { patient_id, surgery_id } = req.body;
    const newPatient = await Service.createPatientSurgery(patient_id, surgery_id);
    return res.status(CREATED).json(newPatient);
  } catch (err) {
    next(err);
  }
}

const getAll = async (req, res, next) => {
  try {
    const data = await Service.getPatientSurgery();
    return res.status(OK).json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create,
  getAll,
}