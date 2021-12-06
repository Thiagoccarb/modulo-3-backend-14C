const { readFileSync } = require('fs');
const archive = 'meu-arquivo.txt';

try {
  const data = readFileSync(archive, 'utf8');
  console.log(data);
} catch(e) {  
  console.error(`Erro ao ler arquivo: ${e.path}`);
  console.log(e);
}