export class User{
    constructor( private age:number, private name:string, private lastname:string){}

    getName():string{
        return this.name
    }
    getLastname():string{
        return this.lastname
    }

        getAge():number{

            return this.age
        }
    
}