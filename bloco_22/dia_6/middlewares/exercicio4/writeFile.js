const fs = require('fs/promises');

module.exports = async (newFile) => {
  return await fs.writeFile('./middlewares/exercicio4/teams.json', JSON.stringify(newFile));
} 
