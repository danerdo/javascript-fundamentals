// let pattern = /xyz/;
// let value = 'This is xyz a test.';
// console.log(value.replace(pattern, 'just'));

// let myString = new String('howdy');
// console.log(myString);
// console.log(myString.toString());

/*
String()
Number()
Boolean()
Object()
Function()
Symbol()
*/

/*
Array()
RegExp()
*/

/*
Date()
Error()
*/

// let myPrimitive = 'THIS IS CRAZY';
// // boxes the string primitive into a String native, performs the lowercase method on the string, then unboxes it back into a primitive again...
// myPrimitive = myPrimitive.toLowerCase();
// console.log(typeof myPrimitive);

let myNumber = new Number(7);
console.log(typeof myNumber);
let myPrimitive = myNumber.valueOf();
console.log(myPrimitive);
console.log(typeof myPrimitive);