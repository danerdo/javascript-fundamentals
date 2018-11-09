var counter = (function() {

    let count = 0;

    function print(message) {
        console.log(message + '---' + count);
    }

    function getCount() { return count; }

    function setCount(value) { count = value; }

    function incrementCount() {
        count += 1;
        print('After increment: ');
    }

    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

    // "reveals" the private functions
    // clearer presentation
    // however, tou can (accidentally) overwrite
    // the property values :/
    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    }
})();

// console.log(counter.count);

counter.increment();
counter.increment();
counter.increment();

counter.increment = 2
console.log(counter.increment);

counter.increment();

// console.log(counter.value);

// counter.set(7);
console.log(counter.get());

counter.reset();