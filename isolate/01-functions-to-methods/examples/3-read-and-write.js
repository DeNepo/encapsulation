'use strict';

// pure function that returns the sum
const sum = (a, b) => { return a + b };

console.assert(7 === sum(3, 4), 'Test 1');
console.assert(9 === sum(5, 4), 'Test 2');

// object method that reads and writes from it's object
const obj = {
  a: 0,
  b: 0,
  result: 0,
  sum: function () {
    this.result = this.a + this.b
  }
};

// methods can write values to their objects
obj.a = 3, obj.b = 4;
obj.sum();
console.assert(7 === obj.result, 'Test 3');
obj.a = 5;
obj.sum();
console.assert(9 === obj.result, 'Test 4');
