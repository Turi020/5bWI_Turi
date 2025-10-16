import { Engine } from "../OO2/Engine";
import { User } from "./User";

export class Car{

    private fuel:string ="Diesel";
  private model:string ="i3";
  private name:string = "Turi";
  private lastname:string= "Dur";
  private age:number=19;


  constructor(model:string,private make:string, private engine:Engine, private user:User){
 
  };
  getHorsePower():number{
    return this.engine.getHorsePower();
  }

  getFuel():string{


    return this.fuel;
  }

  getMake():string{
    return this.make;
  }

  getName():string{
    return this.name;
  }
  getLastname():string{
    return this.lastname;
  }
  getAge():number{
    return this.age;
  }
}