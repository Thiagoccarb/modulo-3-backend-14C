const { teams } = require('.');
const checkInitials = require('./checkInitials');
const writeFile = require('./writeFile');
const readFile = require('./readFile');
const PATH = './middlewares/exercicio4/teams.json';
module.exports = async (req, res, next) => {
  const { name, initials, country, league = "" } = req.body;
  const upperLetters = checkInitials(initials);
  try {

    if(!name ||name.length <= 5 
      || !upperLetters || upperLetters < 3 
      || !country || country.length <= 3) {
      throw new Error('invalid data');
    }
    const file = await readFile(PATH) || [];
    const newTeams = [...file, req.body];
    await writeFile(newTeams);
    return res.status(200).json({ message: 'file has been updated!' })
    next();
  } catch(err) {
    next(err)
  }
}