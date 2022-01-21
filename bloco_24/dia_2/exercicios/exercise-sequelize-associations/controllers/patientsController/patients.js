const {
  listAllPatientsAndPlan,
  listAllPatientsAndSurgeries,
  listByPlanId
} = require('../../services/patientsService');

const OK = 200;

const listAllPatientsPlans = async (_req, res, next) => {
  try {
    const patients = await listAllPatientsAndPlan()
    if (patients.error) {
      next(patients.error);
    };
    return res.status(OK).json(patients)
  } catch (err) {
    next(err);
  };
};

const listAllPatientsSurgeries = async (_req, res, next) => {
  try {
    const patients = await listAllPatientsAndSurgeries();
    if (!patients) {
      return next(patients.error);
    }
    return res.status(OK).json(patients)
  } catch (err) {
    next(err);
  };
};

const listPatientsByPlanId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patients = await listByPlanId(id);
    const { error } = patients;
    if (error) {
      return res.status(404).json({
        message: 'no data registered'
      });
    }
    return res.status(OK).json(patients)
  } catch (err) {
    next(err);
  };
};

module.exports = {
  listAllPatientsPlans,
  listAllPatientsSurgeries,
  listPatientsByPlanId
}