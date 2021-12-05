const fs = require('fs/promises');

const readFile = async (fileName) => {
  const fileJSON = await fs.readFile(fileName);
  const file = JSON.parse(fileJSON);
  return file;
} 

module.exports = readFile;