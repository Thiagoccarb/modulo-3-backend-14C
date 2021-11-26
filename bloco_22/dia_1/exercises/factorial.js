const { questionInt } = require('readline-sync');

const number = questionInt('Digite um numero inteiro maior que 0: ');

const factorial = () => {
  let i = 1;
  let total = 1;
  do {
    total = total * i;
    i += 1;
  }while ( i <= number);
  return total;
}

console.log(`o fatorial de ${number} é:${numberfactorial(number)}`);