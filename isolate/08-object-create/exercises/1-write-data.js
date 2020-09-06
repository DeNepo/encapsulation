'use strict';

// write the initial data for each fakeSet instance (fill in _)

const incrementorPrototype = {
  set stepSize(newValue) {
    this.state.stepSize = newValue;
  },
  get value() {
    return this.state.value;
  },
  increment: function () {
    this.state.value += this.state.stepSize;
  }
};


console.log('incrementorPrototype:', incrementorPrototype);



console.log('--- incrementor A ---');

const incrementorA = Object.create(incrementorPrototype);
incrementorA.id = 'A';
incrementorA.state = {
  value: 0,
  _: _
};

incrementorA.increment(); // value --> 1
incrementorA.stepSize = 2;
incrementorA.increment(); // value --> 3
incrementorA.increment(); // value --> 5
incrementorA.stepSize = -1;
incrementorA.increment(); // value --> 4

const testValueA = incrementorA.value === 4;

console.log('incrementorA:', incrementorA);



console.log('--- incrementor B ---');

const incrementorB = Object.create(incrementorPrototype);
incrementorB.id = 'B';
incrementorB.state = {
  _: _,
  stepSize: -4
};

incrementorB.increment(); // value --> -2
incrementorB.stepSize = 1;
incrementorB.increment(); // value --> -1
incrementorB.increment(); // value --> 0
incrementorB.stepSize = 4;
incrementorB.increment(); // value --> 4

const testValueB = incrementorB.value === 4;

console.log('incrementorB:', incrementorB);
