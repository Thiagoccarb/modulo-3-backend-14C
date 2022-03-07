
export function greeter(name: string) {
  return `Olá ${name}!`;
};

export function personAge(name: string, age: number) {
  return `Olá, ${name}, sua idade é ${age} anos`
};

export function add(x: number, y: number): number {
  return x + y;
};

export function addArray(array: number[]): number {
  return array.reduce(add, 0);
};

export const triangleArea = (base: number, height: number): number => {
  return base * height / 2;
};

export function squareArea(side: number): number {
  return side ** side;
};

export const rectangleArea = (base: number, height: number): number => {
  return base * height;
};
