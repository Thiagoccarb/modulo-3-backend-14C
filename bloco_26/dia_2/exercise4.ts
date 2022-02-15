enum Color {
  white,
  black,
  red,
  silver,
}

enum Port {
  leftFront = 'leftFront',
  rightFront = 'rightFront',
  leftRear = 'leftRear',
  rightRear = 'rightRear',
};

enum Direction {
  left = 'left',
  right = 'right',
};

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('beeeeep beeeeeep!');
  };
  openTheDoor(port: Port): void {
    console.log(`${port} open!`);
  };
  closeTheDoor(port: Port): void {
    console.log(`${port} closed!`);
  };
  turnOn(): void {
    console.log('engine on!');
  };
  turnOff(): void {
    console.log('engine off!');
  };
  speedUp(): void {
    console.log('speeding up...');
  };
  speedDown(): void {
    console.log('speeding down...');
  };
  stop(): void {
    console.log('car has stopped..');
  };
  turn(direction: Direction): void {
    console.log(`turing ${direction}`);
  }
};