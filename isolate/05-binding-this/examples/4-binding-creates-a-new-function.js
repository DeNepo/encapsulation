'use strict';

// binding returns a new function just like the old function
//   but "this" is permanent!


const returnThis = function () {
  return this;
}

const obj1 = {
  id: 1
};
const boundToObj1 = returnThis.bind(obj1);
const boundToObj1Returns = boundToObj1();

console.assert(boundToObj1 !== returnThis, 'boundToObj1 is a new function ...');
console.assert(boundToObj1Returns === obj1, '... `this` is always obj1');

const obj2 = {
  id: 2
};
const boundToObj2 = returnThis.bind(obj2);
const boundToObj2Returns = boundToObj2();

console.assert(boundToObj2 !== returnThis, 'boundToObj2 is a new function ...');
console.assert(boundToObj2Returns === obj2, '... `this` is always obj2');

