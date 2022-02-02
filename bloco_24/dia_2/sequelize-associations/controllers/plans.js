const { Plan } = require('../models');

const ACCEPTED = 202;

const create = async (req, res, next) => {
  try {
    const { id, coverage, price } = req.body;
    const newPlan = await Plan.build({ id, coverage, price });
    await newPlan.save();
    return res.status(ACCEPTED).json({
      id,
      coverage,
      price,
    })
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removedPatient = await Plan.destroy({
      where: { id },
    })
    // console.log(newPatient.dataValues);
    return res.status(OK).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  remove,
}