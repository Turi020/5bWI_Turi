import { Engine } from "./Engine";

export class Car{

    private color:string ="red";
  private model:string ="i3";


  constructor(model:string,private make:string, private engine:Engine){
 
  };
  getHorsePower():number{
    return this.engine.getHorsePower();
  }

  getColor():string{


    return this.color;
  }

  getMake():string{
    return this.make;
  }
}