const MovieService = require('../services/movieService');

const find = async (req, res) => {
  const NOT_FOUND = 404;
  const OK = 200;
  const BAD_REQUEST = 400;
  const { id, title, directedBy, releaseYear } = req.body;
  if (!id || !title || !directedBy || !releaseYear) {
    return res.status(BAD_REQUEST).json({
      message: 'requisição inválida',
    });
  };
  const movie = await MovieService.getByID(id);
  if (!movie) {
    return res.status(NOT_FOUND).json({
      message: 'filme não encontrado',
    });
  }
  return res.status(OK).json(movie);
};

module.exports = {
  find,
};