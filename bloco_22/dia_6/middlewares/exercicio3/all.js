const posts = require('./posts');
module.exports = (_req, res, next) => {
  if(posts.length === 0) return res.status(200).json({ posts: [] });
    return res.status(200).json(posts);
  next();
};