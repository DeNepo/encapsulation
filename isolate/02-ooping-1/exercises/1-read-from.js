'use strict';

const obj = {
  a: 0,
  getA: function () { },
  sumAB: function (b) { },
};

const test1 = obj.getA() === 0;
console.assert(test1, 'Test 1');

const test2 = obj.sumAB(1) === 1;
console.assert(test2, 'Test 2');

obj.a = 4;

const test3 = obj.getA() === 4;
console.assert(test3, 'Test 3');

const test4 = obj.sumAB(1) === 5;
console.assert(test4, 'Test 4');

obj.a = -2;

const test5 = obj.getA() === -2;
console.assert(test5, 'Test 5');

const test6 = obj.sumAB(1) === -1;
console.assert(test6, 'Test 6');
