// regular old function

function daniel(name) {
    console.log(`full name of daniel: ${name}`);
}

daniel('Daniel Rhyne');

// default value
function daniel2(name = 'Danny Rhyne') {
    console.log(`full name of daniel: ${name}`);
}

daniel2();

// no args, instead referencing from the arguments array
function daniel3() {
    console.log(`full name of daniel: ${arguments[0]}`);
}

daniel3('Dan Rhyne');