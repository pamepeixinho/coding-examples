/**
 * First class functions
 *
 * Note: file created to store examples, not posssible to run it
 */

const hi = (name) => `Hi ${name}`;

hi('jonas');
// => "Hi jonas"

const greeting = (name) => hi(name);
greeting('jonas');
// => "Hi jonas"

const greeting = hi;
greeting('jonas');
// => "Hi jonas"