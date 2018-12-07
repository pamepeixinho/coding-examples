var MyFancyObservable = require('./MyFancyObservable');
var observable = new MyFancyObservable();

observable.on('hello', (name) => {
  console.log(name, new Date().toString())
});


observable.on('write-firestore-agents-agenda', (newVisit) => {
  // do some stuff
  console.log('write-firestore-agents-agenda', new Date().toString());
});

// observable.hello('john');
// observable.writeInAgenda();

const SayHello = () => Promise.resolve(observable.hello('john'))
const WriteAgenda = () => Promise.resolve(observable.writeInAgenda())


const promises = Promise.all([SayHello(), WriteAgenda()])

