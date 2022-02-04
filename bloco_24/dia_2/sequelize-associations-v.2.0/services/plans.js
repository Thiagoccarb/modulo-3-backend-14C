const { Plan } = require('../models');

const createPlan = async (coverage, price) => {
  try {
    const newPlan = await Plan.build({ coverage, price });
    await newPlan.save()
    return newPlan;
  } catch (err) {
    console.error(err)
    return null;
  }
};

module.exports = {
  createPlan,
}