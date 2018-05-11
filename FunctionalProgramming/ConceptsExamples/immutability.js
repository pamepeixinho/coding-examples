
/**
 * Immutability
 *
 * Note: file created to store examples, not posssible to run it
*/

/**
 * Mutation can happen on two levels:
 *  - Reference mutation
 *  - Value mutation
*/

/** Not immutable */

// Reference Mutation: when you assign a new reference to an existing variable
let x = { foo: 'bar' };
let y = x;

x = { lorem: 'ipsum' };
console.log(x, y); // Prints "{lorem: 'ipsum'}, {foo: 'bar'}"


// Value Mutation: when you modify an existing object
let x = { foo: 'bar' };
let y = x;

x.foo = 'baz';
console.log(x, y); // Prints "{foo: 'baz'}, {foo: 'baz'}"


/** immutable */

const x = { foo: 'bar' };
const y = { ...x, another: 'param' };
// OR 
//const y = Object.assign({}, x, { another: 'param'});

console.log(x, y); // Prints "{foo: 'bar'}, {foo: 'bar', another: 'param'}"

