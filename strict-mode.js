'use strict';

// strict mode
// this will throw an error because we have not declared the variable as a var/const/let
// function myFunction() {
//     'use strict';
//     y = 3.14;
//     // const y = 3.14;
//     // ^^^^
// }
// myFunction();


// converting mistakes into errors

// you cannot delete a variable in strict mode
// var x = 3.14;
// delete x;


// any assignment to a:
    // non-writable property
    // getter only property
    // non-existing property
    // non-existing variable
    // non-existing object
// will throw an error
// var obj = {};
// Object.defineProperty(obj, 'x', {value:0, writable:false});
// obj.x = 3.14;

// var obj = {get x() {return 0}};
// obj.x = 3.14;

// delete Object.prototype;

// function sum(a, a, c) {
//     // 'use strict';
//     console.log(a);
//     console.log(c);
//     return a + c;
// }

// console.log(sum(1, 5, 3));

// with and eval changes

// var obj = {
//     x: 2
// };
// var x = 17;
// with (obj) {
//     console.log(x);
// }

// in strict mode, this will not introduce a variable into the scope
// in normal mode, this would introduce a variable "x" into the scope
// eval('var x;');

// var x = 17;
// var evalX = eval('"use strict"; var x = 42; x;');
// console.log(x === 17);
// console.log(evalX === 42);


// securing javascript
// in browsers, it's no longer possible to access the window object by using "this"
// impossible to access the most recently called function and the arguments used to run a function