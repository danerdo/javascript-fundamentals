// DONT DO THIS!!!!
/*var myVariables = 'I am at the global scope';

// THIS EITHER!!!!!
var myFunction = function() {
    return 'me too!';
}*/



// function one() {
//     return 'one';
// }

// let value = one();

// console.log(one());

// let value = one;
// console.log(typeof value);

function two() {
    return function() {
        return 'two';
    }
}

console.log(two()());