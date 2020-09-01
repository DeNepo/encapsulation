'use strict';

// bound functions will always have the same "this" no matter what

const returnThis = function () {
  return this;
}

const obj1 = { id: 1 };
const boundToObj1 = returnThis.bind(obj1);

const obj2 = { id: 2 };
const boundToObj2 = returnThis.bind(obj2);


const obj3 = {
  id: 3,
  boundToObj1,
  boundToObj2,
  returnThis,
};


const thisObj1 = obj3.boundToObj1()
const test1 = thisObj1 === obj1;
console.assert(test1, 'Test 1');

const thisObj2 = obj3.boundToObj2();
const test2 = thisObj2 === obj2;
console.assert(test2, 'Test 2');

const thisObj3 = obj3.returnThis();
const test3 = thisObj3 === obj3;
console.assert(test3, 'Test 3');
