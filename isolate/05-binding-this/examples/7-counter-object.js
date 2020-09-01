'use strict';

const counter = {
  // state is encapsulated
  //  you will never access it from outside the object
  _state: {
    count: 0
  },
  // to read state, use the getter
  get count() {
    return this._state.count;
  },
  up: function () {
    this._state.count += 1;
  },
  down: function () {
    this._state.count -= 1;
  }
};

counter.up();
const test1 = counter.count === 1;
console.assert(test1, 'Test 1');

counter.down();
const test2 = counter.count === 0;
console.assert(test2, 'Test 2');


const boundUp = counter.up.bind(counter);
const boundDown = counter.down.bind(counter);

boundUp();
const test3 = counter.count === 1;
console.assert(test3, 'Test 3');

boundDown();
const test4 = counter.count === 0;
console.assert(test4, 'Test 4');



const unBoundUp = counter.up;
const unBoundDown = counter.down;
try {
  unBoundUp();
  console.assert(counter.count === 1, 'Test 3');
  unBoundDown();
  console.assert(counter.count === 0, 'Test 4');
} catch (err) {
  console.log('error calling unBound: ', err);
}

