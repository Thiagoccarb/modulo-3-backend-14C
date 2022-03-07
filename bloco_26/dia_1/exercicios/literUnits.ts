import readline from "readline-sync";

const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

const unitValues: any = {
  kl: 1000,
  hl: 100,
  dal: 10,
  l: 1,
  dl: 0.1,
  cl: 0.01,
  ml: 0.001,
};

function convert(value: number, baseUnit: string, conversionUnit: string) {
  if (!units.some((el) => el === baseUnit)) {
    return 'invalid baseUnit'
  }
  if (!units.some((el) => el === conversionUnit)) {
    return 'invalid conversionUnit'
  }
  const convertedValue = value * unitValues[baseUnit] / unitValues[conversionUnit];
  return `${convertedValue} ${conversionUnit}`;
};

export function exec(units: string[]) {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const currentUnit = readline.question("Escolha uma unidade a ser convertida: \n");
  const convertedUnit = readline.question("Escolha uma unidade de conversão: \n");
  if(!units.includes(currentUnit)) return 'invalid current unit';
  if(!units.includes(convertedUnit)) return 'invalid converted unit';

  const result = convert(value, currentUnit, convertedUnit);

  return result;
}