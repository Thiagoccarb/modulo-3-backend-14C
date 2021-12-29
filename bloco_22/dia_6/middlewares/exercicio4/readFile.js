const fs = require('fs/promises');

module.exports = async (filePath) => {
  try {
    const fileJSON = await fs.readFile(filePath);
    const data = JSON.parse(fileJSON);
    return data;
  } catch(err) {
    return null;
  }
};
