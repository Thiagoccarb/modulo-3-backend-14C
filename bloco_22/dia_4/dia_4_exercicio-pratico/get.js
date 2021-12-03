const recipes = require('./recipes');
module.exports = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'}); // usar o return para finalizar a requisição!!
  return res.status(200).json(recipe);
}