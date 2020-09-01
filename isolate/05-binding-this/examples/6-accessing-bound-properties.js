'use strict';

// to reuse an object's method as you would expect, you need to bind it
//  this is mega important for event handlers

const obj1 = {
  id: 'a',
  readId: function () {
    return this.id;
  },
  writeId: function (newId) {
    this.id = newId;
  }
};
console.assert(obj1.readId() === 'a', 'Test 1');
obj1.writeId('x');
console.assert(obj1.readId() === 'x', 'Test 2');


const obj2 = { id: 'b' };
obj2.readId = obj1.readId;
obj2.writeId = obj1.writeId;

console.assert(obj2.readId() === 'b', 'Test 3');
obj2.writeId('y');
console.assert(obj2.readId() === 'y', 'Test 4');


const readBoundTo1 = obj2.readId.bind(obj1);
const writeBoundTo1 = obj2.writeId.bind(obj1);

console.assert(obj1.readId() === 'x', 'Test 5');
console.assert(readBoundTo1() === 'x', 'Test 6');
writeBoundTo1('hi!');
console.assert(obj1.readId() === 'hi!', 'Test 7');
console.assert(readBoundTo1() === 'hi!', 'Test 8');
