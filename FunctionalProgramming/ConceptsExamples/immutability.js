
/**
  Mutation can happen on two levels: 
  - Reference mutation
  - Value mutation
*/

// Not Functional **************

// Reference Mutation: when you assign a new reference to an existing variable
var x = { foo: 'bar' };
var y = x;

x = { lorem: 'ipsum' };
console.log(x, y); // Prints "{lorem: 'ipsum'}, {foo: 'bar'}"

// --------

// Value Mutation: when you modify an existing object
var x = { foo: 'bar' };
var y = x;

x.foo = 'baz';
console.log(x, y); // Prints "{foo: 'baz'}, {foo: 'baz'}"


// Functional **************

const x = { foo: 'bar' };
const y = { ...x, another: 'param' };

console.log(x, y); // Prints "{foo: 'bar'}, {foo: 'bar', another: 'param'}"

// or 

const x = { foo: 'bar' };
const y = Object.assign({}, x, { another: 'param'});

console.log(x, y); // Prints "{foo: 'bar'}, {foo: 'bar', another: 'param'}"

