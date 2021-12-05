const fs = require('fs/promises');

const writeFile = async (newFile) => {
  return await fs.writeFile('simpsons.json', JSON.stringify(newFile));
} 

module.exports = writeFile;