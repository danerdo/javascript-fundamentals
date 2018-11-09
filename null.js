let test;
console.log(test);
console.log(typeof test);

let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);
console.log(typeof result);

if (result === null) {
    console.log('no match was found');
}

// null is:
// not 0, undefined,.not an empty string
// object reference was expected but no object reference was assigned to the variable
