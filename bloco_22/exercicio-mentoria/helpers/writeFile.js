const fs = require('fs/promises');

const writeFile = (path, file) => {
  try {
    return fs.writeFile(path, JSON.stringify(file))
  } catch (err) {;
    return null;
  }
};

module.exports = writeFile;