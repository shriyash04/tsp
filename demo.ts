// var a:number = 12;
// console.log(a);

// interface

//Define an interface for a Person with properties 
//for name (string) and age (number).

interface Person{
      name:string;
      age:number;

}
var person1:Person={
      name:"shriyash",
      age:23
};
// console.log(person1);

//Define an interface for a bike with properties for make (string), 
//model (string), and an optional year (number).

interface bike{
      make:string;
      model:string;
      year?:number;
}
 var bike1:bike={
      make:"kawasaki",
      model:"zx10r",
      
 };
 var bike2:bike={
      make:"BMW",
      model:"s1000rr",
      year:2008
 };
//  console.log(bike1,bike2);


//Define an interface for a Calculator with methods for add, subtract, multiply, and 
//divide, each accepting two numbers and returning a number.

interface calculator{
      add(a:number,b:number):number;
      subtract(a:number, b:number):number;
      multiply(a:number, b:number):number;
      divide(a:number, b:number):number;
}
var Calculator: calculator = {
      add:(a,b)=> a+b,
      subtract:(a,b)=> a-b,
      multiply:(a,b)=> a*b,
      divide:(a,b)=> a/b
};
// console.log("additon is:-",Calculator.add(10,20));
// console.log("subtraction is:-",Calculator.subtract(10,20));
// console.log("multiplication is:-",Calculator.multiply(10,20));
// console.log("division is:-",Calculator.divide(10,20));


//Define an interface for a Dictionary 
//where the keys are strings and the values are numbers.

interface Dictionary{
      [key:string]:number;
}

var obj:Dictionary={
      "shri":23,
      "ashish":24,
      "abhi":25
};
console.log(obj);

//chat gpt code 

//class

class Animal {
      name: string;
    
      constructor(name: string) {
        this.name = name;
      }
    
      move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
      }
    }
    
    let dog = new Animal("Dog");
    dog.move(10); // Dog moved 10 meters.
    
//     Generics
//     Generics provide a way to create reusable components

function identity<T>(arg: T): T {
      return arg;
    }
    let output1 = identity<string>("myString"); // output1 is of type 'string'
    let output2 = identity<number>(100); // output2 is of type 'number'
    

//     Enums
//     Enums allow a developer to define a set of named constants.

enum Direction {
      Up,
      Down,
      Left,
      Right,
    }
    
    let dir: Direction = Direction.Up;
    console.log(dir); // 0

//Type Assertions
//Type assertions allow you to override TypeScript's type inference when you know 
//more about a value than TypeScript does.

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // 16


// Union and Intersection Types
//Union types allow a value to be one of several types. 
//Intersection types combine multiple types into one.

function printId(id: number | string) {
      console.log(`Your ID is: ${id}`);
    }
    
    printId(101); // Your ID is: 101
    printId("202"); // Your ID is: 202
    
    interface Colorful {
      color: string;
    }
    
    interface Circle {
      radius: number;
    }
    
    type ColorfulCircle = Colorful & Circle;
    
    const ball: ColorfulCircle = {
      color: "blue",
      radius: 5,
    };
    
    console.log(ball); // { color: 'blue', radius: 5 }

    
//     Type Guards
//Type guards allow you to narrow down the type within a conditional block.
function isNumber(value: any): value is number {
      return typeof value === "number";
    }
    
    function logValue(value: number | string) {
      if (isNumber(value)) {
        console.log(`Number: ${value}`);
      } else {
        console.log(`String: ${value}`);
      }
    }
    
    logValue(10); // Number: 10
    logValue("hello"); // String: hello

    
