// var number1 = 35;
// var number2 = 40;

// var number1 = '35';
// var number2 = '40';


// console.log(number1 + number2);

// console.log('my favorite number is: '+number1);

// variables can contain letters, numbers, underscores, dollar signs
// begins with a letter
// can also start with a number or a dollar sign

// var test = 'This is a test';
// var Test = 'This is another test';

// console.log(Test);

// partial case 

// var MyFavoriteCamel;

// underscore

// var my_favorite_number;

// var array = ['this', 'is', 'cool'];

// var array2 = new Array('this', 'is', 'also', 'cool');

function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function() {
        return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.shape;
    }
}

var melon = new Fruit('melon', 'green', 'round');

console.log(melon.describe());