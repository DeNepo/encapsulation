'use strict';

const obj = {
  state: {
    num: 5,
    mod: 0,
  },
  get equals() {
  },
  set number() {
  },
  set modulo() {
  },
};

obj.modulo = 2;
console.assert(obj.state.mod === 2, 'Test 1');
console.assert(obj.equals === 1, 'Test 2');

obj.number = 10;
console.assert(obj.state.num === 10, 'Test 3');

obj.number = 2;
console.assert(obj.state.num === 2, 'Test 4');
console.assert(obj.state.mod === 2, 'Test 5');
console.assert(obj.equals === 0, 'Test 6');

obj.modulo = 7;
console.assert(obj.state.mod === 7, 'Test 7');
console.assert(obj.equals === 2, 'Test 8');

obj.modulo = obj.state.num;
console.assert(obj.state.num === 2, 'Test 9');
console.assert(obj.state.mod === 2, 'Test 10');
console.assert(obj.equals === 0, 'Test 11');
