/**
 * Function Composition
 */

const R = require('ramda');

formatString('Quinto Andar'); // => 'quinto-andar'

// 1. Split the name on spaces
// 2. Map the strings lower case
// 3. Join the strings with dash
// 4. Encode the URI component

/** plain js with intermediate variables */
const formatString = (value) => {
  const splittedValue = value.split(' ');
  const lowerCaseValue = splittedValue.map(str => str.toLowerCase());
  const dashedValue = lowerCaseValue.join('-');
    return encodeURIComponent(dashedValue);
}

/** plain js */
const formatString = (value) => encodeURIComponent(
  value.split(' ')
    .map(str => str.toLowerCase())
    .join('-')
);

/** ramda */
const formatString = R.pipe(
  R.split(' '),       // String => [String]
  R.map(R.toLower),   // [String] => [String]
  R.join('-'),        // [String] => String
  encodeURIcomponent  // String => String
);


