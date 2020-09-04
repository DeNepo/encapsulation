'use strict';

// write the initial data for each fakeSet instance (fill in _)

const fakeSetPrototype = {
  add: function (value) {
    const doesNotIncludeValue = !this.values.includes(value);
    if (doesNotIncludeValue) {
      this.values.push(value)
    }
  },
  has: function (value) {
    return this.values.includes(value);
  },
  get size() {
    return this.values.length;
  }
};
console.log('fakeSetPrototype:', fakeSetPrototype);




console.log('--- fake set A ---');

const fakeSetA = Object.create(fakeSetPrototype);
fakeSetA.id = 'A';
fakeSetA._ = _;

const testA1 = fakeSetA.size === 0;

fakeSetA.add(3);
const testA2 = fakeSetA.size === 1;
const testA3 = fakeSetA.has(3) === true;

fakeSetA.add(1);
fakeSetA.add(2);
fakeSetA.add(3);
const testA4 = fakeSetA.size === 3;
const testA5 = fakeSetA.has(1) === true;
const testA6 = fakeSetA.has(2) === true;
const testA7 = fakeSetA.has(3) === true;

const testA8 = fakeSetA.has(4) === false;

console.log('fakeSetA:', fakeSetA);




console.log('--- fake set B ---');

const fakeSetB = Object.create(fakeSetPrototype);
fakeSetB.id = 'B';
fakeSetB._ = _;


const testB1 = fakeSetB.size === 0;

fakeSetB.add('12');
const testB2 = fakeSetB.size === 1;
const testB3 = fakeSetB.has('12') === true;

fakeSetB.add(12);
fakeSetB.add('12');
fakeSetB.add(12);
const testB4 = fakeSetB.size === 2;
const testB5 = fakeSetB.has(12) === true;

const testB6 = fakeSetB.has(1) === false;
const testB7 = fakeSetB.has(2) === false;
const testB8 = fakeSetB.has(3) === false;


console.log('fakeSetB:', fakeSetB);





// this exercise replicates two instance methods and one instance property of Set
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
