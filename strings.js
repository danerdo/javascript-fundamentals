let first = 'Knowledge is power but enthusiasm pulls the switch.';
let second = 'Do or do not. There is no try.';
let third = '2,8,15,16,23,42';

// You can even call methods on string literals
console.log('bob loves you.'.toUpperCase());

let mySplit = third.split(',').map(number => parseInt(number));
console.log(mySplit);


let mySlice = first.slice(13, 18);
console.log(mySlice);

let mySubstr = first.substr(13, 5);
console.log(mySubstr);

let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);

let myStartsWith = second.startsWith('Do');
console.log(myStartsWith);

let myInclude = second.toLowerCase().includes('there');
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);

let myTrim = '   bloated    ';
console.log(myTrim.length);
console.log(myTrim.trim().length);
