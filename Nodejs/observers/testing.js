var MyFancyObservable = require('./MyFancyObservable');
var observable = new MyFancyObservable();

const t = () => {
  console.log(' bla')

  setTimeout(() => {
    console.log(name, new Date().toString())
  }, 1000);
  for (let i = 0; i < 201830981274652; i+=1) {

  }
}

observable.on('write-firestore-agents-agenda', (name) => {
  console.log(' fja')
  t();
});

observable.on('write-firestore-agents-agenda', (newVisit) => {
  Promise.resolve(() => { console.log('write-firestore-agents-agenda', new Date().toString()) })
});

// observable.hello('john');
// observable.writeInAgenda();

const WriteAgenda = () => Promise.resolve(() => observable.writeInAgenda())

const SayHello = () => Promise.resolve(() => observable.hello('john'))

Promise.all([WriteAgenda(), SayHello()]);