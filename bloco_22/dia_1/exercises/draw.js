const { questionFloat, questionInt } = require('readline-sync');

const number =  Math.floor(Math.random() * (11));
const guessedNumber = questionInt('digite um número de 0 a 10: ');

console.log(`número escolhido:${guessedNumber}`, `número sorteado:${number}`)
if (number === guessedNumber) return console.log('Parabéns');
return console.log('tente outra vez!'); 
