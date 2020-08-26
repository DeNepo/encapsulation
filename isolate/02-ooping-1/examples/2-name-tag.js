'use strict';

// psst, be sure to use JS Tutor or Debugger!

const nameTag = {
  first: '',
  last: '',
  getName: function () {
    const fullName = this.first + ' ' + this.last;
    return fullName;
  },
  setName: function (newName) {
    const splitNewName = newName.split(',');
    const newFirst = splitNewName[0];
    const newLast = splitNewName[1];
    this.first = newFirst;
    this.last = newLast;
  }
};

const fullName1 = nameTag.getName();
const testingName1 = fullName1 === ' ';
console.assert(testingName1, 'Test 1');

nameTag.setName('hi,bye');
const fullName2 = nameTag.getName();
const testingName2 = fullName2 === 'hi bye';
console.assert(testingName2, 'Test 2');

nameTag.setName(',two');
const fullName3 = nameTag.getName();
const testingName3 = fullName3 === ' two';
console.assert(testingName3, 'Test 3');

nameTag.setName('one,');
const fullName4 = nameTag.getName();
const testingName4 = fullName4 === 'one ';
console.assert(testingName4, 'Test 4');

const finalFirstIsOne = nameTag.first === 'one';
const finalLastIsEmpty = nameTag.last === '';
console.assert(finalFirstIsOne, 'Test 5');
console.assert(finalLastIsEmpty, 'Test 6');
