/**
 * Pure Functions: Returns the same result given same parameters
 */

/**
* Example 1
*/

var array = [1, 2, 3, 4, 5];

/** pure */
array.slice(0, 3);
//=> [1, 2, 3]

array.slice(0, 3);
//=> [1, 2, 3]

array.slice(0, 3);
//=> [1, 2, 3]


/** impure */
array.splice(0, 3);
//=> [1, 2, 3]

array.splice(0, 3);
//=> [4, 5]

array.splice(0, 3);
//=> []


/**
* Example 2
*/

/** pure */
const checkAge = (age) => {
  const minimum = 18;
  return age >= minimum;
};

checkAge(21);
// => true


/** impure */
let minimum = 18;
const checkAge = (age) => {
  return age >= minimum;
};

checkAge(21);
// => true

minimum = 22;
checkAge(21);
// => false


/**
* Example 3: Cachable
*/

const squareNumber = memoize((x) => x * x);

squareNumber(4);
//=> 16

squareNumber(4); // returns cache for input 4
//=> 16

squareNumber(5);
//=> 25

squareNumber(5); // returns cache for input 5
//=> 25
