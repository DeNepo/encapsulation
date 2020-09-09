// the challenge

const literalA = {
  numbers: [-1, 1, 0, -2, 2],
  get evens() {
    return this.numbers.filter(num => num % 2 === 0);
  },
  get odds() {
    return this.numbers.filter(num => num % 2 !== 0);
  }
};

const literalB = {
  numbers: [3, 67, -21, 6, -4],
  get evens() {
    return this.numbers.filter(num => num % 2 === 0);
  },
  get odds() {
    return this.numbers.filter(num => num % 2 !== 0);
  }
};

// the solution

class EvenOdd { };

const instanceA = _;
const instanceB = _;

// the tests

const test1a = instanceA instanceof EvenOdd;
const test1b = instanceB instanceof EvenOdd;
console.assert(test1a, 'Test 1.A - instanceof');
console.assert(test1b, 'Test 1.B ');

const test2a = instanceA.hasOwnProperty('numbers');
const test2b = instanceB.hasOwnProperty('numbers');
console.assert(test2a, 'Test 2.A - own properties');
console.assert(test2b, 'Test 2.B');

const test3a = !instanceA.hasOwnProperty('evens') && !instanceA.hasOwnProperty('odds');
const test3b = !instanceB.hasOwnProperty('evens') && !instanceB.hasOwnProperty('odds');
console.assert(test3a, 'Test 3.A - not-own properties');
console.assert(test3b, 'Test 3.B');

const test4a = instanceA.evens.toString() === '0,-2,2';
const test4b = instanceB.evens.toString() === '6,-4';
console.assert(test4a, 'Test 4.A - evens');
console.assert(test4b, 'Test 4.B');

const test5a = instanceA.odds.toString() === '-1,1';
const test5b = instanceB.odds.toString() === '3,67,-21';
console.assert(test5a, 'Test 5.A - odds');
console.assert(test5b, 'Test 5.B');

instanceA.numbers = [5, 4, 3, 2, 1, 0];
instanceB.numbers = [0, -1, -2, -3, -4, -5];

const test6a = instanceA.evens.toString() === '4,2,0';
const test6b = instanceB.evens.toString() === '0,-2,-4';
console.assert(test6a, 'Test 6.A - evens');
console.assert(test6b, 'Test 6.B');

const test7a = instanceA.odds.toString() === '5,3,1';
const test7b = instanceB.odds.toString() === '-1,-3,-5';
console.assert(test7a, 'Test 7.A - odds');
console.assert(test7b, 'Test 7.B');
