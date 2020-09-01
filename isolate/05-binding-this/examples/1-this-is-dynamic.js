'use strict';

// in es5 functions, 'this' is dynamic
//  it's value changes depending on where you call the function

// PS. `this` will be different in the browser and in JS Tutor!

const returnThis = function () {
  return this;
}


const calledGlobally1 = returnThis();
console.log('called globally 1: ', calledGlobally1);


const obj1 = {
  id: 1,
  returnThis
};

const calledOnObj1 = obj1.returnThis();
const returnsObj1 = calledOnObj1 === obj1;
console.assert(returnsObj1, 'called on object 1');


const obj2 = { id: 2 };
obj2.method = returnThis;

const calledOnObj2 = obj2.method();
const returnsObj2 = calledOnObj2 === obj2;
console.assert(returnsObj2, 'called on object 2');


const calledGlobally2 = returnThis();
console.log('called globally 2: ', calledGlobally2);

