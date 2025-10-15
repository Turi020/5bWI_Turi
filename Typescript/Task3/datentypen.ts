interface Person {
    firstname: string;
    lastname: string;
    age: number;
    isMale?: boolean;
    email: string;
    isMarried: boolean;
  
    address: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
  
    phoneNumbers: {
      type: string;
      number: string;
    }[];
  
    hobbies: string[];
  }


const person = {
    firstname: "Hans",
    lastname: "Müller",
    age: 70,
    email: "hans.mueller@example.com",
    isMarried: true,
    address: {
      street: "Hauptstrasse 5",
      city: "Berlin",
      postalCode: "10115",
      country: "Germany",
    },
    phoneNumbers: [
      {
        type: "mobile",
        number: "+49 171 1234567",
      },
      {
        type: "home",
        number: "+49 30 9876543",
      },
    ],
    hobbies: ["wandern", "lesen", "reisen"],
  };
  

function printName(person:Person){
  console.log(person.hobbies);
}

printName(person);  