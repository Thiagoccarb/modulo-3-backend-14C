"use strict";
// O polimorfismo com interfaces se dá da mesma forma que o com herança.
// Duas classes diferentes implementam a mesma interface, implementando também os métodos obrigatórios que a interface estipula.
// Podemos enviar a uma função, por exemplo, um parâmetro com o tipo da interface, e passar em seu lugar um objeto de uma classe que implementa tal interface.
// Há uma garantia de que tudo o que a interface estipula está implementado na classe e, consequentemente, no objeto.
// Classes diferentes irão implementar determinados métodos de formas diferentes. No exemplo abaixo o método showIdentification é implementado de forma diferente nas classes PessoaFísica e PessoaJurídica .
class Employee {
    constructor(name) {
        this.name = name;
        Employee.addEmployee();
    }
    static addEmployee() {
        this.employeeCount += 1;
    }
    static get employees() {
        return this.employeeCount;
    }
}
Employee.employeeCount = 0;
console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
