const Service = require('../../services');

const CREATED = 201;

const create = async (req, res, next) => {
  try {
    const { coverage, price } = req.body;
    const newPlan = await Service.createPlan(coverage, price);
    return res.status(CREATED).json(newPlan);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create,
}