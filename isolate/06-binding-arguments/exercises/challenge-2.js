'use strict';

// psst. use the debugger!

// don't change this code
const obj1 = { thing: '' };
const obj2 = { thing: 0 };
const obj3 = { thing: true };

function addThem(boundArg, freeArg) {
  return this.thing + boundArg + freeArg;
}

// do write code here



// don't change this code

const result1 = bound1(1);
const test1 = result1 === '_1';
console.assert(test1, 'Test 1');

const result2 = bound1(false);
const test2 = result2 === '_false';
console.assert(test2, 'Test 2');

const result3 = bound2(2);
const test3 = result3 === 3;
console.assert(test3, 'Test 3');

const result4 = bound2(-1);
const test4 = result4 === 0;
console.assert(test4, 'Test 4');

const result5 = bound3(null);
const test5 = result5 === 'truenull';
console.assert(test5, 'Test 5');

const result6 = bound3(12);
const test6 = result6 === 'true12';
console.assert(test6, 'Test 6');
