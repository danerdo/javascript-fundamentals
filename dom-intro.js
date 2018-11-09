(function() {
    function clickHandler(message) {
        console.log('hi ... ' + message);
    }

    // get a reference to myButton
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', () => clickHandler('hi from iife'));
})();
