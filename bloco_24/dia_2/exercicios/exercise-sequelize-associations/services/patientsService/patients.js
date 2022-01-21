const { Plan, Patient, Surgery } = require('../../models');

const NOT_FOUND = 404;

const listAllPatientsAndPlan = async () => {
  const patients = await Patient.findAll({
    include: [{ model: Plan, as: 'plan' }]
  });
  if (!patients.length) return {
    error: {
      code: NOT_FOUND,
      message: 'no data registered'
    }
  };
  return patients;
};

const listAllPatientsAndSurgeries = async () => {
  const patients = await Patient.findAll({
    include: [{ model: Surgery, as: 'surgeries', through: { attributes: [] } }],
  });
  if (!patients) {
    return {
      error: {
        code: NOT_FOUND,
        message: 'no data registered'
      }
    }
  };
  return patients;
};

const listByPlanId = async (id) => {
  const patients = await Patient.findAll({
    where: { plan_id: id }
  });
  if (!patients.length) {
    return {
      error: {
        code: NOT_FOUND,
        message: `patients whose plan_id is ${id} not found`
      }
    }
  }
  return patients;
}

module.exports = {
  listAllPatientsAndPlan,
  listAllPatientsAndSurgeries,
  listByPlanId
}