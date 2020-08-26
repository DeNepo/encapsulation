'use strict';

// refactor this function into a method
const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const obj = {
  array: [3],
  mergeArrays: function (arrToMerge) {
    // merge the internal array with the argument
    //  without modifying the saved array!

  }
}


const merged1 = obj.mergeArrays([2]);
const test1 = deepCompare(merged1, [3, 2]);
console.assert(test1, 'Test 1');

const merged2 = obj.mergeArrays([5]);
const test2 = deepCompare(merged2, [3, 5]);
console.assert(test2, 'Test 2');


obj.array = ['hi!'];
const merged3 = obj.mergeArrays(['bye!']);
const test3 = deepCompare(merged3, ['hi!', 'bye!']);
console.assert(test3, 'Test 3');

const merged4 = obj.mergeArrays([':)']);
const test4 = deepCompare(merged4, ['hi!', ':)']);
console.assert(test4, 'Test 4');



// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
