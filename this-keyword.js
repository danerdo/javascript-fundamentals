// var car = {
//     make: 'bmw',
//     model: '745li',
//     year: 2010,
//     getPrice: function() {
//         return 5000;
//     },
//     printDescription: function() {
//         console.log(this.make + ' ' + this.model);
//     }
// }

// The this keyword depends on how a function is called!!!

// An object can be passed as the first argument to call
// or apply and the "this" keyword will be bound to it

// function first() {
//     return this;
// }


// console.log(first());

// this is Node's global object
// because that's where the
// first method was called


// function second() {
//     'use strict';

//     return this;
// }

// when 'use strict' is used, the this keyword will refer to 'undefined'
// console.log(second());

let myObject = { value: 'My Object' };

// value is set on the global object
// global.value = 'Global object';

function third(name, smell) {
    // Returns something different depending on how
    // we call this method:
    return this.value + name + smell;
}

// console.log(third());

// Both call and apply allow you to explicitly set
// what you want to represent 'this'. The difference
// is in how additional arguments to the function
// are sent

console.log(third.toString());
console.log(third.call(myObject, 'bob', 'stinky'));

console.log(third.apply(myObject, ['bob', 'stinky']));

// function fifth() {
//     console.log(this.firstName + ' ' + this.lastName);
// }

// let customer1 = {
//     firstName: 'bob',
//     lastName: 'tabor',
//     print: fifth
// }

// let customer2 = {
//     firstName: 'richard',
//     lastName: 'boughton',
//     print: fifth
// }

// customer1.print();
// customer2.print();