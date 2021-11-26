const { questionFloat, questionInt } = require('readline-sync');

const altura = questionFloat('Qual sua altura em metros? ');
const peso = questionInt('Qual seu peso em kg? ');

const imc = () => {
  const imc = parseFloat(peso / (altura * altura));
  console.log(`Seu imc é ${imc}`)
  switch (imc) {
    case imc <= 18.5:
      console.log('Abaixo do peso (magreza)');
      break;
    case imc > 18.5 && imc <= 24.9:
      console.log('Peso normal');
      break;
      case imc > 25.00 && imc <= 29.9:
        console.log('Acima do peso (sobrepeso)');
      break;
      case imc > 30.00 && imc <= 34.9:
        console.log('Obesidade grau I');
      break;
      case imc > 35.00 && imc <= 39.9:
        console.log('Obesidade grau II');
      break;
    default:
      console.log('Obesidade graus III e IV');
  }
}

imc();

// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9    	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV