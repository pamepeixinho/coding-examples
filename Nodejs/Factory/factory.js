function MyClass (options) {
  this.options = options;
}

function create(options) {
  // modify the options here if you want
  return new MyClass(options);
}

module.exports.create = create;
