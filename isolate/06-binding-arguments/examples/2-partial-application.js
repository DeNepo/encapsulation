'use strict';

// if you pass in fewer arguments than the function requires
//  you can pass the remaining ones in later
//  this is called "Partial Application"

const addToWord = function (boundArgument, unboundArgument) {
  this.word += boundArgument + unboundArgument;
}

const obj1 = {
  word: '1'
};

const boundObj1x = addToWord.bind(obj1, 'x');
const boundObj1y = addToWord.bind(obj1, 'y');

boundObj1x('A');
console.assert(obj1.word === '1xA', 'Test 1');

boundObj1x('B');
console.assert(obj1.word === '1xAxB', 'Test 2');

boundObj1y('C');
console.assert(obj1.word === '1xAxByC', 'Test 3');


const obj2 = {
  word: '2'
};

const boundObj2a = addToWord.bind(obj2, 'a');
const boundObj2b = addToWord.bind(obj2, 'b');

boundObj2a('X');
console.assert(obj2.word === '2aX', 'Test 4');

boundObj2b('Y');
console.assert(obj2.word === '2aXbY', 'Test 5');

boundObj2a('Z');
console.assert(obj2.word === '2aXbYaZ', 'Test 6');

