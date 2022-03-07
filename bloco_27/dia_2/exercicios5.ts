import Subject from './exercicios.ts/exercise4';
import Person from './exercicios.ts/exercise1';
import Employee from './exercicios.ts/exercise3';

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._admissionDate = new Date();
    this._salary = salary;
    this.subject = subject;
    this._registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(newSubject: Subject) {
    this._subject = newSubject;
  }

  get registration() {
    return this._registration;
  }

  set registration(newRegistration: string) {
    if (newRegistration.length < 15) throw new Error('invalid registration');
    this.registration = newRegistration;
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary < 0) throw new Error('invalid salary');
    this._salary = newSalary;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(newAdmissonDate: Date) {
    if (newAdmissonDate.getTime() > new Date().getTime()) throw new Error('invalid admissionDate');
    this._admissionDate = newAdmissonDate;
  }
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}