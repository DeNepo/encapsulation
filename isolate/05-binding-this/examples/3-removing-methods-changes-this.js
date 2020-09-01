'use strict';

// moving functions between objects changes this


const obj1 = {
  id: 1,
  method: function () {
    return this;
  }
};

const test1 = obj1.method();
console.assert(test1 === obj1, 'Test 1');

const returnThis = obj1.method;
const freeFloatingFunction = returnThis();
console.log('this outside of obj1:', freeFloatingFunction);
