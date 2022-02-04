const INTERNAL_ERROR = 500;

module.exports = (err, _req, res, _next) => {
  console.error(err.message);
  if(err.code) {
    return res.status(err.code).json({
      message: err.error,
    })
  }
  res.status(INTERNAL_ERROR).json({
    message: 'internal server error'
  });
};