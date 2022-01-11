const model = require('../../model/artist');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exisisting = await model.findById(id);
    if(!exisisting) {
      return res.status(404).end();
    }

    const updated = await model.remove(id);

    return res.status(204).end();
  } catch (err) {
    next(err);
  };
};