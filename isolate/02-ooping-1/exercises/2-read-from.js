'use strict';

const obj = {
  word: '',
  getWord: function () { },
  concat: function (secondHalf) { },
};

const test1 = obj.getWord() === 'the word is ';
console.assert(test1, `Test 1`);

const test2 = obj.concat('--') === '--';
console.assert(test2, `Test 2`);

const test3 = obj.word === '';
console.assert(test3, 'Test 3');

obj.word = 'hoy';

const test4 = obj.getWord() === 'the word is hoy';
console.assert(test4, `Test 4`);

const test5 = obj.concat('()') === 'hoy()';
console.assert(test5, `Test 5`);

const test6 = obj.word === 'hoy';
console.assert(test6, 'Test 6');

obj.word = ':)';

const test7 = obj.getWord() === 'the word is :)';
console.assert(test7, 'Test 7');

const test8 = obj.concat('-<-<') === ':)-<-<';
console.assert(test8, 'Test 8');
