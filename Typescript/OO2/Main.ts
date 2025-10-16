import { Car } from "./Car";
import { Engine } from "./Engine";
import { User } from "./User";
let car:Car= new Car("Diesel","Mercedes", new Engine(500),new User(19,"Turi","Dur"));

console.log(car.getMake());
console.log(car.getFuel());
console.log(car.getHorsePower());
console.log(car.getName());
console.log(car.getLastname());
console.log(car.getAge());