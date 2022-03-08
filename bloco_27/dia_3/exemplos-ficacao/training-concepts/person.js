"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateCPF = () => {
    const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const number = Math.floor(Math.random() * 10);
    let CPF;
    for (let index = 0; index <= 10; index++) {
        CPF = +arrNumbers[number];
    }
    return CPF;
};
class Person {
    constructor(name, _birthDate) {
        this.name = name;
        this.name = name;
        this._CPF = this.generateCPF();
        this._birthDate = _birthDate;
    }
    get CPF() {
        return this._CPF;
    }
    get birthDate() {
        return this._birthDate;
    }
    getAge() {
        const today = new Date();
        const bornDate = new Date(this.birthDate);
        const value = today.getTime() - bornDate.getTime();
        if (value < 0) {
            throw new Error('invalid birthDate');
        }
        return Math.floor(value / (365 * 24 * 60 * 60 * 1000));
    }
    generateCPF() {
        const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let CPF = '';
        for (let index = 0; index <= 10; index++) {
            const number = Math.floor(Math.random() * 10);
            CPF = `${CPF}${String(arrNumbers[number])}`;
        }
        return Number(CPF);
    }
}
const person = new Person('joao', new Date('2001-03-02'));
console.log(person.getAge());
