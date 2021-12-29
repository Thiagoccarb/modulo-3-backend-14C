
const readFile = require('./readFile');
const PATH = './middlewares/exercicio4/teams.json';
module.exports = async (_req, res, next) => {
  const file = await readFile(PATH) || [];
  if(file.length === 0) {
    return res.status(200).json({ teams: [] })
  }
  return res.status(200).json(file)

  next();
}