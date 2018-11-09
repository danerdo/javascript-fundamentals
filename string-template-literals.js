'use strict';
let name = 'bob';

console.log(`${name} is cool`);

// console.log(`daniel
// is
// cool`);

let test = `
            daniel
           is
          cool
         bro`;

console.log(test);

function getReasonCount() { return 2; }

let interpolation = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reasons' } to try this`;

console.log(interpolation);