'use strict';

const obj = {
  arr: [1, 0],
  merge: function (toMerge) { },
  replace: function (newArr) { },
};

obj.merge([4]);
const test1 = deepCompare(obj.arr, [4, 1, 0]);
console.assert(test1, 'Test 1');

obj.replace(['hi!', 'bye!']);
const test2 = deepCompare(obj.arr, ['hi!', 'bye!'])
console.assert(test2, 'Test 2');

obj.merge([null]);
const test3 = deepCompare(obj.arr, [null, 'hi!', 'bye!'])
console.assert(test3, 'Test 3');;

obj.merge(obj.arr);
const test4 = deepCompare(obj.arr, [null, 'hi!', 'bye!', null, 'hi!', 'bye!'])
console.assert(test4, 'Test 4');



// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
