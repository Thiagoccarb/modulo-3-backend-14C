const Service = require('../../services');

const CREATED = 201;

const create = async (req, res, next) => {
  try {
    const { doctor, specialty } = req.body;
    const newSurgery = await Service.createSurgery(doctor, specialty);
    return res.status(CREATED).json(newSurgery);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create,
}