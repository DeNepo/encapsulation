
// refactor this function into a method
const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const obj = {
  array: [3],
  mergeArrays: function (arrToMerge) {
    // merge the argument into the saved array
  }
}

obj.mergeArrays([2]);
const test1 = deepCompare(obj.array, [3, 2]);
console.assert(test1, 'Test 1');

obj.mergeArrays([1]);
const test2 = deepCompare(obj.array, [3, 2, 1]);
console.assert(test2, 'Test 2');

obj.array = [1, 2]
obj.mergeArrays(obj.array);
const test3 = deepCompare(obj.array, [1, 2, 1, 2]);
console.assert(test3, 'Test 3');




// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
