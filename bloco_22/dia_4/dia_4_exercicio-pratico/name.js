const recipes = require('./recipes');

module.exports = (req, res) => {
  const { name } = req.query;
  console.log(name);
  const filteredRecipes = recipes.filter((el) => el.name.toLowerCase().includes('macarrão'));
  return res.status(200).json(filteredRecipes);
};