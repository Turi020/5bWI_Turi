
import { Car } from "./car";
import { Engine } from "./Engine";
let car:Car= new Car("i3","bmw", new Engine(100));

console.log(car.getColor());
console.log(car.getHorsePower());