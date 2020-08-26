'use strict';

// psst, be sure to use JS Tutor or Debugger!

const sum = {
  total: 0,
  addNewValue: function (newValue) {
    this.total = this.total + newValue;
  }
};

sum.addNewValue(-1);
sum.addNewValue(2);
const testingValue1 = sum.total === 1;
console.assert(testingValue1, 'Test 1');


sum.addNewValue(-1);
const testingValue2 = sum.total === 0;
console.assert(testingValue2, 'Test 2');

sum.addNewValue(100);
const testingValue3 = sum.total === 100;
console.assert(testingValue3, 'Test 3');

sum.addNewValue(-150);
const testingValue4 = sum.total === -50;
console.assert(testingValue4, 'Test 4');
