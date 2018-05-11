/**
 * Automatic Currying with Ramda
 */

const R = require('ramda');

const house = {
  id: '000',
  rent: 'R$ 2.000,00',
  address: 'Lombard St, San Francisco, CA',
  isFurnished: false,
};

R.prop('rent', house);
// => R$ 2.000,00

const getRent = R.prop('rent');
getRent(house);
// => R$ 2.000,00
