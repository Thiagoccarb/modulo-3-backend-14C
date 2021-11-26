const { questionInt } = require('readline-sync');

const script = [
  { option: "calcular o imc", script: "./imc.js" },
  { option: "adivinhar número sorteado", script: "./draw.js" },
  { option: "calcular o fatorial", script: "./factorial.js" },
];


let options = script.map((el, i ) => `${i + 1} - ${el.option}`);
options.unshift("Escolha uma das opções abaixo digitando o número correspondente.");
options = options.join("\n");
const index = questionInt(options) - 1;
const question = script[index];
console.log(question.script);
 if(!question) return console.log("número inválido");
 require(question.script);
