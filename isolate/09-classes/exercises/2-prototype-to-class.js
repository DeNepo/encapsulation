'use strict';

const MaxMinPrototype = {
  get spread() {
    return this.state.max - this.state.min;
  },
  addNumber(newNum) {
    // ... code ...
  }
};

// write the class
//  hint: state ---> { min: 'number', max: 'number' }

class MaxMin {

};

// these two lines are correct! don't change them
const instanceA = new MaxMin();
const instanceB = new MaxMin();

// the tests

const test1a = instanceA instanceof MaxMin;
const test1b = instanceB instanceof MaxMin;
console.assert(test1a, 'Test 1.A - instanceof');
console.assert(test1b, 'Test 1.B ');

const test2a = instanceA.hasOwnProperty('state');
const test2b = instanceB.hasOwnProperty('state');
console.assert(test2a, 'Test 2.A - own properties');
console.assert(test2b, 'Test 2.B');

const test3a = !instanceA.hasOwnProperty('spread') && !instanceA.hasOwnProperty('addNumber');
const test3b = !instanceB.hasOwnProperty('spread') && !instanceB.hasOwnProperty('addNumber');
console.assert(test3a, 'Test 3.A - not-own properties');
console.assert(test3b, 'Test 3.B');

const test4a = instanceA.state.max === -Infinity && instanceA.state.min === Infinity;
const test4b = instanceA.state.max === -Infinity && instanceA.state.min === Infinity;
console.assert(test4a, 'Test 4.A - initial values');
console.assert(test4b, 'Test 4.B');

const test5a = instanceA.spread === -Infinity;
const test5b = instanceB.spread === -Infinity;
console.assert(test5a, 'Test 5.A - get spread');
console.assert(test5b, 'Test 5.B');

instanceA.addNumber(0);
instanceB.addNumber(-4);
const test6a = instanceA.state.max === 0 && instanceA.state.min === 0;
const test6b = instanceB.state.max === -4 && instanceB.state.min === -4;
console.assert(test6a, 'Test 6.A - addNumber');
console.assert(test6b, 'Test 6.B');

const test7a = instanceA.spread === 0;
const test7b = instanceB.spread === 0;
console.assert(test7a, 'Test 7.A - get spread');
console.assert(test7b, 'Test 7.B');

instanceA.addNumber(-2);
instanceB.addNumber(-2);
const test8a = instanceA.state.max === 0 && instanceA.state.min === -2;
const test8b = instanceB.state.max === -2 && instanceB.state.min === -4;
console.assert(test8a, 'Test 8.A - addNumber');
console.assert(test8b, 'Test 8.B');

const test9a = instanceA.spread === 2;
const test9b = instanceB.spread === 2;
console.assert(test9a, 'Test 9.A - get spread');
console.assert(test9b, 'Test 9.B');

instanceA.addNumber(-1);
instanceB.addNumber(-1);
const test10a = instanceA.state.max === 0 && instanceA.state.min === -2;
const test10b = instanceB.state.max === -1 && instanceB.state.min === -4;
console.assert(test10a, 'Test 10.A - addNumber');
console.assert(test10b, 'Test 10.B');

const test11a = instanceA.spread === 2;
const test11b = instanceB.spread === 3;
console.assert(test11a, 'Test 11.A - get spread');
console.assert(test11b, 'Test 11.B');
