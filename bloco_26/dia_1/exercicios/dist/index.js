"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const MetricUnitsConversor = __importStar(require("./meterUnits"));
const LiterUnitsConversor = __importStar(require("./literUnits"));
const option = readline_sync_1.default.questionInt('digite:\n 1 - para conversão de unidades métricas\n 2 - para conversão de unidades de volume(litros)\n');
if (option <= 0 || option > 2) {
    throw new Error('please, press a valid choice');
}
const literUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
const meterUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
const execOption = (value) => {
    return value === 1 ? MetricUnitsConversor.exec(meterUnits)
        : LiterUnitsConversor.exec(literUnits);
};
console.log(execOption(option));
