let jimmy = 'jimmy';
function sayHello(name) {
    return function() {
        console.log('howdy ' + name)
    }
}

// let bob = sayHello('BOB');
let jimmyJohn = sayHello(jimmy);

// this wont change the name in the closure...
jimmy = 'tommy';

// bob();
jimmyJohn();