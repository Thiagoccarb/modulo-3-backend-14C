import { Car, Port, Direction, Color } from "./exercise4";

const gol = new Car('Volkswagen', Color.silver, 4);
gol.openTheDoor(Port.rightRear);
gol.turnOn();
gol.turn(Direction.left);
gol.turn(Direction.left);
gol.turn(Direction.right);
gol.speedUp();
gol.speedDown();
gol.turn(Direction.right);
gol.turn(Direction.right);
gol.speedDown();
gol.stop();