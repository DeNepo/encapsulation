'use strict';

const obj = {
  _arr: [],
  get arr() {

  },
  merge: function (toMerge) {

  },
  replaceAll: function (newEntry) {

  },
  getRemixed(mixer) {

  },
};


const test0a = obj.arr !== obj._arr;
console.assert(test0a, 'Test 0 a');

const test0b = deepCompare(obj.arr, obj._arr);
console.assert(test0a, 'Test 0 b');



obj.merge([1, 2]);
const test1 = deepCompare(obj.arr, [1, 2]);
console.assert(test1, 'Test 1');

obj.replaceAll('~');
const test2 = deepCompare(obj.arr, ['~', '~']);
console.assert(test2, 'Test 2');

const remixed = obj.getRemixed('|');
obj.merge([remixed]);
const test3 = deepCompare(obj.arr, ['~|~', '~', '~']);
console.assert(test3, 'Test 3');


const copy = obj.arr;

const test4a = copy !== obj.arr;
console.assert(test4a, 'Test 4 a');

const test4b = deepCompare(copy, ['~|~', '~', '~']);
console.assert(test4b, 'Test 4 b');


const finalRemix = obj.getRemixed('*');
console.assert(finalRemix === '~|~*~*~', 'Test 5');




// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
