const posts = require('./posts');
module.exports = (req, res, next) => {
  const { id } = req.params;
  const validate = posts.some((el) => el.id === parseInt(id, 10));
  if (!id || !validate) {
    return res.status(404).json({ message: 'invalid id' });
  }
  next();
};