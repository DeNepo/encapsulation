'use strict';

// add or change properties in the objects to pass the asserts
//   psst. use the debugger!

const obj1 = {
  id: 1,
  x: true
};

const obj2 = {
  id: 2,
  list: [1, 2, 3],
};

const obj3 = {
  id: 3,
};

// don't change any code below this comment
function returnThis() { return this; }

const bound1 = returnThis.bind(obj1);
const bound2 = returnThis.bind(obj2);
const bound3 = returnThis.bind(obj3);

const this1 = bound1();
const this2 = bound2();
const this3 = bound3();


const test1 = this1.x === false;
console.assert(test1, 'Test 1');

const test2 = this3.foo === 'bar';
console.assert(test2, 'Test 2');

const test3 = JSON.stringify(this2.list) === '[3,2,1]';
console.assert(test3, 'Test 3');

const test4 = this3.friend === obj2;
console.assert(test4, 'Test 4');

const test5 = this2.friend === this1;
console.assert(test5, 'Test 5');
