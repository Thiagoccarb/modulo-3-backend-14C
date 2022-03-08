"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = require("./exercise1");
class Employee extends exercise1_1.Person {
    constructor(name, birthDate, salary) {
        super(name, birthDate);
        this._registration = String();
        this._salary = salary;
        this._admissionDate = new Date(Date.now());
        this._registration = this.generateRegistration();
    }
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, ''); // /\W/ is a metacharacter matcher for non-word characters
        return `FNC${randomStr}`;
    }
    get registration() {
        return this._registration;
    }
    get salary() {
        return this._salary;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set salary(value) {
        if (value > 0) {
            this._salary = value;
        }
    }
    set admissionDate(date) {
        if (date.getTime() > new Date().getTime())
            throw new Error('Invalid Data');
        this._admissionDate = date;
    }
}
