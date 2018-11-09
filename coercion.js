let a = 7;
let b = '6';
let c = a + b;
// concatenating the number 7 and the string literal '6' into the string '76'
console.log('Answer ' + c);

let d = a + parseInt(b, 10);

console.log('Answer ' + d);


let e = parseInt('bob', 10);

console.log(e);
console.log(isNaN(e));

