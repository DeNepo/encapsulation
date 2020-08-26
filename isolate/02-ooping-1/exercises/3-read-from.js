'use strict';

const obj = {
  array: ['hi!'],
  getArray: function () { },
  getCopy: function () { },
};

const reference1 = obj.getArray();

const test1 = reference1 === obj.array;
console.assert(test1, 'Test 1');

const copy1 = obj.getCopy();

const test2 = copy1 !== obj.array;
console.assert(test2, 'Test 2');

const test3 = deepCompare(copy1, obj.array);
console.assert(test3, 'Test 3');


obj.array = [0, 1];
const reference2 = obj.getArray();

const test4 = reference2 === obj.array;
console.assert(test4, 'Test 4');

const copy2 = obj.getCopy();

console.assert(copy2 !== obj.array, 'Test 5 a');
console.assert(deepCompare(copy2, obj.array), 'Test 5 b');


obj.array = [null, undefined, false];
const reference3 = obj.getArray();

const test8 = reference3 === obj.array;
console.assert(test8, 'Test 6');

const copy3 = obj.getCopy();
console.assert(copy3 !== obj.array, 'Test 7 a');
console.assert(deepCompare(copy3, obj.array), 'Test 7 a');




// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
