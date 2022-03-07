import readline from "readline-sync";

import * as MetricUnitsConversor from './meterUnits';
import * as LiterUnitsConversor from './literUnits';

const option = readline.questionInt('digite:\n 1 - para conversão de unidades métricas\n 2 - para conversão de unidades de volume(litros)\n')
if (option <= 0 || option > 2) {
  throw new Error('please, press a valid choice');
}

const literUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
const meterUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

const execOption = (value: number) => {
  return value === 1 ? MetricUnitsConversor.exec(meterUnits)
    : LiterUnitsConversor.exec(literUnits)
};

console.log(execOption(option));