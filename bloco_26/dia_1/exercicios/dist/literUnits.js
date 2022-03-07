"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
const unitValues = {
    kl: 1000,
    hl: 100,
    dal: 10,
    l: 1,
    dl: 0.1,
    cl: 0.01,
    ml: 0.001,
};
function convert(value, baseUnit, conversionUnit) {
    if (!units.some((el) => el === baseUnit)) {
        return 'invalid baseUnit';
    }
    if (!units.some((el) => el === conversionUnit)) {
        return 'invalid conversionUnit';
    }
    const convertedValue = value * unitValues[baseUnit] / unitValues[conversionUnit];
    return `${convertedValue} ${conversionUnit}`;
}
;
function exec(units) {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const currentUnit = readline_sync_1.default.question("Escolha uma unidade a ser convertida: \n");
    const convertedUnit = readline_sync_1.default.question("Escolha uma unidade de conversão: \n");
    if (!units.includes(currentUnit))
        return 'invalid current unit';
    if (!units.includes(convertedUnit))
        return 'invalid converted unit';
    const result = convert(value, currentUnit, convertedUnit);
    return result;
}
exports.exec = exec;
