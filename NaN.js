// console.log(NaN != NaN);

// console.log(Number('dan'));

// console.log(typeof NaN);

// console.log(isNaN(NaN));

// console.log(isNaN('dan'));

// console.log(isNaN(true)); // False. +true == 1.
// console.log(true !== true);
// console.log(isNaN(false)); // False. +false == 0.
// console.log(false !== false);

// console.log(isNaN('')); // False. +'' == 0.
// console.log(isNaN('5e3')); // False. +'5e3' == 5000.
// console.log(isNaN('Infinity')); // False. +'Infinity' == Infinity.
// console.log(isNaN('-Infinity')); // False. +'-Infinity' == -Infinity.

// console.log(isNaN([0])); // False. +[0] == 0.

// console.log(isNaN(new Date)); // False. +new Date == Current Time in Milliseconds.
// console.log(isNaN(new Date('Invalid Date'))); // True. The millisecond representation of
//                                  // invalid dates is `NaN`.

// console.log(isNaN({'valueOf': function(){ return 1; }})); // False.

/* There is recourse: in ECMAScript, `NaN` is the only non-reflexive value;
 * i.e., `NaN != NaN`. Thus, by definition, a value that is not equal to
 * itself must be `NaN`.
*/

// 0 / 0 != 0 / 0; // True. `0 / 0 == NaN`.

/* The Moral: Always use `A != A` to test for `NaN` values. */

// console.log(Number.isNaN(Number('dan')));

// console.log(3/0);
// console.log(Infinity - Infinity);
// console.log(Infinity + Infinity);
// console.log(Infinity * Infinity);