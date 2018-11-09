let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        // perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    } 
}

car.printDescription();
console.log(car.year);

// don't do this
// console.log(car['getPrice']());

// never do this on an object
// console.log(car[1]);

// var anotherCar = {};
// anotherCar.whatever = 'bob';

// console.log(anotherCar.whatever);

// var a = {
//     myProperty: { 
//         b: 'hi' 
//     }
// };

var a = {
    myProperty: [ 
        {d: 'eiudh'},
        {e: 'titit'}, 
        {b: 'hi'},
        {c: 'aoj'}
    ]
};

a.myProperty.forEach(property => console.log(property));

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: '528i' },
    { year: 1982, make: 'Buick', model: 'Skylark' }
];

let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Tabor', phoneNumbers: [ '(123) 456-7890', '(123) 567-8901', ] },
        { firstName: 'Richard', lastName: 'Boughton', phoneNumbers: [ '(123) 555-7894', '(123) 555-8903' ] }
    ]
}