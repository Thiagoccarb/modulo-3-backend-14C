"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangleArea = exports.squareArea = exports.triangleArea = exports.addArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
;
function personAge(name, age) {
    return `Olá, ${name}, sua idade é ${age} anos`;
}
exports.personAge = personAge;
;
function add(x, y) {
    return x + y;
}
exports.add = add;
;
function addArray(array) {
    return array.reduce(add, 0);
}
exports.addArray = addArray;
;
const triangleArea = (base, height) => {
    return base * height / 2;
};
exports.triangleArea = triangleArea;
function squareArea(side) {
    return side ** side;
}
exports.squareArea = squareArea;
;
const rectangleArea = (base, height) => {
    return base * height;
};
exports.rectangleArea = rectangleArea;
