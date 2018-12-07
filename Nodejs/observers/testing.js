var MyFancyObservable = require('./MyFancyObservable');
var observable = new MyFancyObservable();

observable.on('hello', console.log);

observable.hello('john');

observable.on('write-firestore-agents-agenda', (newVisit) => {
  // do some stuff
  console.log('write-firestore-agents-agenda', newVisit);
});


observable.writeInAgenda();
