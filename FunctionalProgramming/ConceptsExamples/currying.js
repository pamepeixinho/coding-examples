/**
 * Currying
 *
 * Note: file created to store examples, not posssible to run it
 */

const regularFunction = (a, b) => a + b;

const curryUnaryFunction = (a) => (b) => a + b;

regularFunction(1);
// => NaN

regularFunction(1, 2);
// => 3

curryUnaryFunction (1);
// => [function] (b => 1 + b)

curryUnaryFunction (1) (2);
// => 3

const sumB = curryUnaryFunction (1);
sumB(2);
// => 3

