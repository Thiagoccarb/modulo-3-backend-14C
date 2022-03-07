import { Person } from './exercise1';

class Employee extends Person {
  private _registration: string = String();
  private _salary: number;
  private _admissionDate: Date;
  generateRegistration(): string
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');// /\W/ is a metacharacter matcher for non-word characters
    return `FNC${randomStr}`;
  }
  constructor(name: string, birthDate: Date, salary: number,) {
    super(name, birthDate);
    this._salary = salary;
    this._admissionDate = new Date(Date.now());
    this._registration = this.generateRegistration();
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

  set salary(value: number) {
    if (value > 0) {
      this._salary = value;
    }
  }

  set admissionDate(date: Date) {
    if (date.getTime() > new Date().getTime()) throw new Error('Invalid Data');
    this._admissionDate = date;
  }
}