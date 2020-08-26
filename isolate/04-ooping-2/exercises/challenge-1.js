'use strict';

const obj = {
  state: {
    biggest: -Infinity,
    smallest: Infinity,
    all: []
  },
  addNumber: function (newValue) { }
};

const returned1 = obj.addNumber(0);
console.assert(returned1 === true, 'Test 1 a');
console.assert(obj.state.all.length === 1, 'Test 1 b');
console.assert(obj.state.biggest === 0, 'Test 1 c');
console.assert(obj.state.smallest === 0, 'Test 1 d');

const returned2 = obj.addNumber(1);
console.assert(returned2 === true, 'Test 2 a');
console.assert(obj.state.all.length === 2, 'Test 2 b');
console.assert(obj.state.biggest === 1, 'Test 2 c');
console.assert(obj.state.smallest === 0, 'Test 2 d');

const returned3 = obj.addNumber(-1);
console.assert(returned3 === true, 'Test 3 a');
console.assert(obj.state.all.length === 3, 'Test 3 b');

const returned4 = obj.addNumber(-0.5);
console.assert(returned4 === true, 'Test 4 a');
console.assert(obj.state.all.length === 4, 'Test 4 b');
console.assert(obj.state.biggest === 1, 'Test 4 c');
console.assert(obj.state.smallest === -1, 'Test 4 d');

const returned5 = obj.addNumber('0');
console.assert(returned5 === false, 'Test 5');

const returned6 = obj.addNumber(true);
console.assert(returned6 === false, 'Test 6');

const returned7 = obj.addNumber(null);
console.assert(returned7 === false, 'Test 7');

const returned8 = obj.addNumber(undefined);
console.assert(returned8 === false, 'Test 8');

console.assert(obj.state.all.length === 4, 'Test 9 a');
console.assert(obj.state.biggest === 1, 'Test 9 b');
console.assert(obj.state.smallest === -1, 'Test 9 c');

