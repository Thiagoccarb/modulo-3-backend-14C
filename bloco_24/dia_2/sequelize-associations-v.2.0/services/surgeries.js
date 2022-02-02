const { Surgery } = require('../models');

const createSurgery = async (doctor, specialty) => {
  try {
    const newSurgery = await Surgery.build({ doctor, specialty });
    await newSurgery.save()
    return newSurgery;
  } catch (err) {
    console.error(err)
    return null;
  }
};

module.exports = {
  createSurgery,
}