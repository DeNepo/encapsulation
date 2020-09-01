'use strict';

// .bind takes arguments after the object for "this"
//  they are used as arguments when you later call the function

const addToWord = function (letter) {
  this.word += letter;
}

const obj1 = {
  word: '1'
};

const boundObj1x = addToWord.bind(obj1, 'x');
const boundObj1y = addToWord.bind(obj1, 'y');

boundObj1x();
console.assert(obj1.word === '1x', 'Test 1');

boundObj1x();
console.assert(obj1.word === '1xx', 'Test 2');

boundObj1y();
console.assert(obj1.word === '1xxy', 'Test 3');


const obj2 = {
  word: '2'
};

const boundObj2a = addToWord.bind(obj2, 'a');
const boundObj2b = addToWord.bind(obj2, 'b');

boundObj2a();
console.assert(obj2.word === '2a', 'Test 4');

boundObj2b();
console.assert(obj2.word === '2ab', 'Test 5');

boundObj2a();
console.assert(obj2.word === '2aba', 'Test 6');

