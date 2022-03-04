interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string
}


const testInterfaceEmployee: Employee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');// /\W/ is a metacharacter matcher for non-word characters

        return `FNC${randomStr}`;
    }
}

console.log(testInterfaceEmployee);