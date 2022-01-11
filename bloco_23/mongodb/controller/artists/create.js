const model = require('../../model/artist');

module.exports = async (req, res, next) => {
  try {
    const { name, genre } = req.body;
    if (!name || !genre) {
      return res.status(400).json({
        message: 'must inform name and genre'
      });
    }
    const newArtist = { name, genre };
    await model.create(newArtist)

    return res.status(201).json(newArtist);
  } catch (err) {
    next(err);
  };
};