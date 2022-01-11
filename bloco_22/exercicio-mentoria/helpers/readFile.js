const fs = require('fs/promises');

const readFile = async (path) => {
  try {
    const file = await fs.readFile(path);
    return String(file);
  } catch (err) {
    return err;
  };
};

module.exports = readFile;
