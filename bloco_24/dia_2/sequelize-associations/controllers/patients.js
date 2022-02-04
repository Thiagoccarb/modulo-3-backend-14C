const { Patient, Plan } = require('../models');

const validate = require('../helpers/joi');

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const BAD_REQUEST = 400;
const create = async (req, res, next) => {
  try {
    const { name, plan_id } = req.body;
    const error = validate(req.body);
    console.log(error);
    if (error) {
      return next(error)
    }
    const newPatient = Patient.build({ name, plan_id });
    await newPatient.save();
    return res.status(CREATED).json({
      name, plan_id,
    })
  } catch (err) {
    next(err);
  }
};

const listAll = async (_req, res, next) => {
  try {
    const data = await Patient.findAll({
      // attributes: { exclude: ['id']},
    });
    if (!data.length) {
      return next({ code: NOT_FOUND, message: 'no data registered' });
    };
    return res.status(OK).json(data)
  } catch (err) {
    next(err);
  }
};

const listAllPatientsAndPlan = async (_req, res, next) => {
  const data = await Patient.findAll({
    // attributes: { exclude: ['id']},
    include: [{ model: Plan, as: 'plan', attributes: { exclude: ['id'] } }], // -- EAGER LOADING -- similar to join query 
    raw: true
  });
  if (!data.length) {
    return next({ code: NOT_FOUND, message: 'no data registered' });
  };
  return res.status(OK).json(data)
};

// const listAllPatientsAndSurgeries = async () => {
//   const patients = await Patient.findAll({
//     include: [{ model: Surgery, as: 'surgeries', through: { attributes: [] } }],
//   });
//   if (!patients) {
//     return {
//       error: {
//         code: NOT_FOUND,
//         message: 'no data registered'
//       }
//     }
//   };
//   return patients;
// };

// const listByPlanId = async (id) => {
//   const patients = await Patient.findAll({
//     where: { plan_id: id }
//   });
//   if (!patients.length) {
//     return {
//       error: {
//         code: NOT_FOUND,
//         message: `patients whose plan_id is ${id} not found`
//       }
//     }
//   }
//   return patients;
// }

module.exports = {
  create,
  listAll,
  listAllPatientsAndPlan,
}