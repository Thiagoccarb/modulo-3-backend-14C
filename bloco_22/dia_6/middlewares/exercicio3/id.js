const posts = require('./posts');
module.exports = (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((el) => el.id === parseInt(id, 10));
    return res.status(200).json(post);
  next();
};