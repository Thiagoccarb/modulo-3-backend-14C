"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = __importDefault(require("./exercise1"));
function createEnrollment(length) {
    let result = '';
    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = CHARACTERS.length;
    for (let i = 0; i < length; i++) {
        result += CHARACTERS.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
class Student extends exercise1_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._examsGrades = [];
        this._worksGrades = [];
        this._enrollment = createEnrollment(16);
    }
    set examsGrades(grades) {
        if (grades.length !== 4)
            throw new Error('invalid grades');
        this._examsGrades = grades;
    }
    set worksGrades(grades) {
        if (grades.length !== 2)
            throw new Error('invalid grades');
        this._worksGrades = grades;
    }
    get enrollment() {
        return this._enrollment;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    sumNotes() {
        const testScoreSum = this._examsGrades.reduce((sum, score) => sum + score, 0);
        const worksScoreSum = this._worksGrades.reduce((sum, score) => sum + score, 0);
        return testScoreSum + worksScoreSum;
    }
    averageNotes() {
        const total = this.sumNotes();
        const divisor = 6;
        const avg = total / divisor;
        return avg;
    }
}
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));
carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
