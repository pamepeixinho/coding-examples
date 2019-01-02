// MyFancyObservable.js

// Reference from: https://blog.risingstack.com/fundamental-node-js-design-patterns/

// var util = require('util');
// var EventEmitter = require('events').EventEmitter;

// function MyFancyObservable() {
//   EventEmitter.call(this);
// }

// util.inherits(MyFancyObservable, EventEmitter);

// MyFancyObservable.prototype.hello = function (name) {
//   this.emit('hello', name);
// };

// ---------------

// Code improved
var EventEmitter = require('events').EventEmitter;

class MyFancyObservable extends EventEmitter {
  constructor() {
    super();
    EventEmitter.call(this);
  }

 hello(name) {
  this.emit('hello', name);
 }

 writeInAgenda() {
   this.emit('write-firestore-agents-agenda', { visit: { code: '989' }});
 }
}

module.exports = MyFancyObservable;
