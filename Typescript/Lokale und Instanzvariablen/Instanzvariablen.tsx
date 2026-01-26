class Person{
    name: string;

    constructor (name: string){

        this.name= name;
    }

    Hallo():void{
        console.log("Hallo " + this.name);
    }

}

const person1 = new Person("Alex");
const person2 = new Person("Turi");

person1.Hallo();
person2.Hallo();