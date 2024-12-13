// primitive - call by value( copy of the original value is passed to the function)

// 7 - types : string , Number Boolean , null , undefined , Symbol(unique) , BigInt

// defined symbol
const id = Symbol('123')
const anotherId = Symbol('123') 

// both id and anotherId are different
//console.log(id == anotherId);


// JavaScript is a dynamically typed language.
let x = 10;      // x is a number
x = "Hello";     // Now x is a string
x = true;        // Now x is a boolean


// null - (type - object)
//      -Not a default value ,  must be explicitly assigned.
//      - Used to indicate "nothing" or "empty" intentionally.

// undefined - (type - undefined)
//           - Default value for uninitialized variables or missing properties.
//           - Indicates that a variable or property has not been initialized or defined.


// Reference Type(Non primitive) - call by reference( reference of the original value is passed to the function)

// Arrays , Objects and funtions

// Array
const arr = ["shaktiman" , "naagraj" , "kirmada"];

// object - declared in { } braces  (key value pair)
let obj = {
    name: "Tushar",
    age: 22, 
}

// function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunction);


