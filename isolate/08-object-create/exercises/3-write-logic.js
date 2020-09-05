'use strict';

const calculatorPrototype = {
  get value() {

  },
  add: function (x, y = undefined) {

  },
  subtract: function (x, y = undefined) {

  }
};
console.log('calculatorPrototype:', calculatorPrototype);


console.log('--- calculator 1 ---');

const calculator1 = Object.create(calculatorPrototype);
calculator1.id = 1;
calculator1.state = { value: 0, };


calculator1.add(1);
console.assert(calculator1.value === 1, 'Test 1.a');

calculator1.subtract(0, 2);
console.assert(calculator1.value === -2, 'Test 1.b');

calculator1.subtract(3);
console.assert(calculator1.value === -5, 'Test 1.c');

calculator1.add(2, 3);
console.assert(calculator1.value === 5, 'Test 1.d');

calculator1.add(-1);
console.assert(calculator1.value === 4, 'Test 1.e');


console.log('calculator 1:', calculator1);


console.log('--- calculator 2 ---');

const calculator2 = Object.create(calculatorPrototype);
calculator2.id = 2;
calculator2.state = { value: 12, };


calculator2.add(1, 0);
console.assert(calculator2.value === 1, 'Test 2.a');

calculator2.subtract(2);
console.assert(calculator2.value === -1, 'Test 2.b');

calculator2.subtract(-1);
console.assert(calculator2.value === 0, 'Test 2.c');

calculator2.add(3);
console.assert(calculator2.value === 3, 'Test 2.d');

calculator2.subtract(0, 5);
console.assert(calculator2.value === -5, 'Test 2.e');


console.log('calculator 2:', calculator2);
