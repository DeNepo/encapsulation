'use strict';

// pure functions can only get their values by argument
//  and must return their value to the global scope
const pureAdd = (a, b) => {
  return a + b;
}

const result1 = pureAdd(3, 4);
console.assert(result1 === 7, 'Test 1');

// same function, same arguments, same return value
const result2 = pureAdd(3, 4);
console.assert(result2 === 7, 'Test 2');

// an object with two methods for interacting with it's data
const obj = {
  a: 0,
  b: 0,
  // update data stored in the object
  setAandB: function (a, b) {
    this.a = a;
    this.b = b;
  },
  // read the sum of saved data
  sumAandB: function () {
    return this.a + this.b;
  }
};

obj.setAandB(3, 4);

const result3 = obj.sumAandB();
console.assert(result3 === 7, 'Test 3');

obj.setAandB(3, 9);

// same method, same arguments, different return value
const result4 = obj.sumAandB();
console.assert(result4 === 12, 'Test 4');
