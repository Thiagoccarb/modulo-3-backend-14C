const { readFile } = require('fs').promises;

const archive = 'meu-arquivo.txt';
readFile(archive, 'utf8')
  .then((data) => console.log(data))
  .catch((e) => console.log(e))
  
  process.exit(1); 
