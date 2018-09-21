const { inspect } = require('util');

// Original Object

const schedules = {
  "2018-09-22": {
    times: [
      {
        time: '10:20',
        available: false,
      },
      {
        time: '16:20',
        available: true,
      },
    ],
  },
  "2018-09-23": {
    times: [
      {
        time: '10:20',
        available: true,
      },
      {
        time: '16:20',
        available: true,
      },
    ],
  },
}

// Target result

const targetSchedules = [ 
  { 
    date: '2018-09-22', 
    times: [ 
      { 
        label: '16:20', 
        id: 1
      },
    ], 
  },
  { 
    date: '2018-09-23', 
    times: [ 
      { 
        label: '10:20', 
        id: 0 
      }, 
      { 
        label: '16:20', 
        id: 1 
      }, 
    ],
  },
];


// ---------------------------------------------------------------

// Original Code
const _filterAvailableDates = (schedules) => {
  let dates = [];
  // Schedules is an object where each entry is a date
  for (const key in schedules) {
    // Id number is its index in the list, rework the object
    let times = schedules[key].times.map((element, index) => { 
      return { label: element.time, id: index, available: element.available }; 
    });
    times = times.filter((element) => element.available);
    times = times.map((element) => { return { label: element.label, id: element.id };});
    dates.push({ date: key, times: times });
  }
  // dates were in an object, they might not be sorted
  dates.sort((a, b) => { return a.date > b.date; });
  return dates.filter(date => date.times.length > 0)
    .slice(0, this.MAX_AVAILABLE_DATES);
}

// output
console.log(inspect(_filterAvailableDates(schedules),  false, null, true));

// With Ramda (FP)

const R = require('ramda');

const MapIndexed = R.addIndex(R.map);

const sortByDate = R.sortBy(R.prop('date'));

const isNotEmptyTime = (element) => element.times.length > 0;

const mapNewStructure = (element, index) => 
  ({ label: element.time, id: index, available: element.available });

const mapStructureAvailable = 
  ({ label, id }) => ({ label, id });

const mapScheduleTimes = R.pipe(
  MapIndexed(mapNewStructure),      // [{ time, available, status }] => [{ label, id, available }]
  R.filter(R.prop('available')),    // [{ label, id, available }] => [{ label, id, available }]
  R.map(mapStructureAvailable),     // [{ label, id, available }] => [{ label, id }]
);

const mapValidScheduleDates = R.pipe(
  sortByDate,
  R.filter(isNotEmptyTime),
  R.slice(0, this.MAX_AVAILABLE_DATES)
);

const _filterAvailableDatesWithRamda = (schedules) => {
  let dates = [];

  R.forEachObjIndexed((schedule, key) => {
    const times = mapScheduleTimes(schedule.times);
    dates.push({ date: key, times });
  }, schedules);

  return mapValidScheduleDates(dates);
}
// output
console.log(inspect(_filterAvailableDatesWithRamda(schedules),  false, null, true));