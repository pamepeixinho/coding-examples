/**
 * Function First Api with Ramda
 */

const _ = require('lodash');
const R = require('ramda');

const house = {
  id: '000',
  rent: 'R$ 2.000,00',
  fee: 0,
  address: 'Lombard St, San Francisco, CA',
};

const houseList = [
  house,
  {
    id: '111',
    rent: 'R$ 30.000,00',
    fee: 1000,
    address: 'Powell St, San Francisco, CA',
  },
]

const hasFee = (house) => house.fee > 0;

/** Lodash */
const filterHousesWithFeeLodash = (houseList) => _.filter(houseList, hasFee);

filterHousesWithFeeLodash(houseList);

/** Ramda */
const filterHousesWithFee = R.filter(hasFee);

filterHousesWithFee(houseList);

filterHousesWithFee(houseList2);
filterHousesWithFee(houseList3);


