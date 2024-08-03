// var a:number = 12;
// console.log(a);
var person1 = {
    name: "shriyash",
    age: 23
};
var bike1 = {
    make: "kawasaki",
    model: "zx10r",
};
var bike2 = {
    make: "BMW",
    model: "s1000rr",
    year: 2008
};
var Calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return a / b; }
};
var obj = {
    "shri": 23,
    "ashish": 24,
    "abhi": 25
};
console.log(obj);
//chat gpt code 
//class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " moved ").concat(distance, " meters."));
    };
    return Animal;
}());
var dog = new Animal("Dog");
dog.move(10); // Dog moved 10 meters.
//     Generics
//     Generics provide a way to create reusable components
function identity(arg) {
    return arg;
}
var output1 = identity("myString"); // output1 is of type 'string'
var output2 = identity(100); // output2 is of type 'number'
//     Enums
//     Enums allow a developer to define a set of named constants.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var dir = Direction.Up;
console.log(dir); // 0
//Type Assertions
//Type assertions allow you to override TypeScript's type inference when you know 
//more about a value than TypeScript does.
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength); // 16
// Union and Intersection Types
//Union types allow a value to be one of several types. 
//Intersection types combine multiple types into one.
function printId(id) {
    console.log("Your ID is: ".concat(id));
}
printId(101); // Your ID is: 101
printId("202"); // Your ID is: 202
var ball = {
    color: "blue",
    radius: 5,
};
console.log(ball); // { color: 'blue', radius: 5 }
//     Type Guards
//Type guards allow you to narrow down the type within a conditional block.
function isNumber(value) {
    return typeof value === "number";
}
function logValue(value) {
    if (isNumber(value)) {
        console.log("Number: ".concat(value));
    }
    else {
        console.log("String: ".concat(value));
    }
}
logValue(10); // Number: 10
logValue("hello"); // String: hello
