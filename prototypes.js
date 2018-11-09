'use strict';

let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);

// console.log(newCar.make);
// newCar.make = 'audi';
// console.log(newCar.make);
console.log(newCar.whatever);

let prototypeCar = Object.getPrototypeOf(newCar);

// console.log(Object.getPrototypeOf(newCar));

// let myPrototype = Object.getPrototypeOf(newCar);
// let prototypeOfOriginalCar = Object.getPrototypeOf(myPrototype);
// console.log(myPrototype.make);
// console.log(prototypeOfOriginalCar);

// originalCar.doors = 4;
// console.log(newCar.doors);

// console.log(originalCar.hasOwnProperty('doors'));
// console.log(newCar.hasOwnProperty('doors'));
