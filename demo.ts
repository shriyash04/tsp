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



