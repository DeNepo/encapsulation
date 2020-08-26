'use strict';

const obj = {
  number: 5,
  mod: 0,
  equals: 0,
  setNumber: function (num) { },
  modulo: function (modder) { }
};

obj.modulo(2);
console.assert(obj.mod === 2, 'Test 1');
console.assert(obj.equals === 1, 'Test 2');

obj.setNumber(10);
console.assert(obj.number === 10, 'Test 3');

obj.setNumber(2);
console.assert(obj.number === 2, 'Test 4');
console.assert(obj.mod === 2, 'Test 5');
console.assert(obj.equals === 1, 'Test 6');

obj.modulo(6);
console.assert(obj.mod === 6, 'Test 7');
console.assert(obj.equals === 2, 'Test 8');

obj.modulo(obj.number);
console.assert(obj.number === 2, 'Test 9');
console.assert(obj.mod === 2, 'Test 10');
console.assert(obj.equals === 0, 'Test 11');
