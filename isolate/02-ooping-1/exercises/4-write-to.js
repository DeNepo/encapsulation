'use strict';

const obj = {
  string: '',
  setString: function (str) { },
  remixString: function (mixer) { }
};

obj.setString('hoy');
console.assert(obj.string === 'hoy', 'Test 1');

obj.setString('mimi');
console.assert(obj.string === 'mimi', 'Test 2');

obj.remixString('|');
console.assert(obj.string === 'm|i|m|i', 'Test 3');

obj.setString('-_-');
console.assert(obj.string === '-_-', 'Test 4');

obj.remixString('.');
console.assert(obj.string === '-._.-', 'Test 5');

obj.remixString(`'`);
console.assert(obj.string === `-'.'_'.'-`, 'Test 6');

obj.setString(obj.string);
console.assert(obj.string === `-'.'_'.'-`, 'Test 7');
