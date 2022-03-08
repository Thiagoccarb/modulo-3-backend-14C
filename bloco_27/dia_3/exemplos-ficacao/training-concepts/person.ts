import IPerson from "./IPerson";

abstract class Person implements IPerson {
  private _CPF: number;
  private _birthDate: Date;
  constructor(public name: string, _birthDate: Date) {
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
  private generateCPF(): number {
    const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let CPF = '';
    for (let index = 0; index <= 10; index++) {
      const number = Math.floor(Math.random() * 10);
      CPF = `${CPF}${String(arrNumbers[number])}`
    }
    return Number(CPF);
  }
}

class Employee extends Person implements IPerson {
  private _admissionDate: Date = new Date();
  private _salary: number = 0;
  constructor(name: string, _birthDate: Date) {
    super(name, _birthDate)
    this.name = name;
  }

  get salary() {
    return this._salary;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('invalid salary');
    }
    this._salary = value;
  }
}

class Engineer extends Employee implements IPerson {
  private _role: string;
  constructor(name: string, _role: string, _birthDate: Date) {
    super(name, _birthDate);
    this._role = _role;
  }
  get role() {
    return this._role;
  }

  set role(newRole: string) {
    this._role = this.role;
  }
}

class Architect extends Employee implements IPerson {
  private _role: string;
  constructor(name: string, _role: string, _birthDate: Date) {
    super(name, _birthDate);
    this._role = _role;
  }
  get role() {
    return this._role;
  }

  set role(newRole: string) {
    this._role = this.role;
  }
}

export class FactoryPerson {

  //injeção de dependência
  public static createEmployee(type: string, name: string, birthDate: Date, role: string): IPerson {
    if (type === 'Engineer') {
      return new Engineer(name, role, birthDate)
      return new Architect(name, role, birthDate);
    }
    return null as unknown as IPerson
  }
}