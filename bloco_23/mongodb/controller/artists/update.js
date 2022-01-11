const model = require('../../model/artist');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exisisting = await model.findById(id);
    if(!exisisting) {
      return res.status(404).end();
    }

    const { name, genre } = req.body;
    if (!name || !genre) {
      return res.status(400).json({
        message: 'must inform name and genre'
      });
    }

    const updated = await model.update({
      ...exisisting,
      name,
      genre,
    });

    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  };
};