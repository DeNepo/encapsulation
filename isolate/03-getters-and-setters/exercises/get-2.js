const obj1 = {
  numbers: [12, 4, 9, 36, 7, 0, -2],
  modulo: 3,
  getZeroRemainders: function () {
    return this.numbers.filter(x => {
      return x % this.modulo === 0
    });
  }
};

const obj2 = {
  numbers: [12, 4, 9, 36, 7, 0, -2],
  modulo: 3,
  // write a getter that matches the behavior of .getZeroRemainders
};

const obj1ZeroRemainders = obj1._;
const test1a = deepCompare(obj1ZeroRemainders, [12, 9, 36, 0]);
console.assert(test1a, 'Test 1 a');

const obj2ZeroRemainders = obj2._;
const test1b = deepCompare(obj2ZeroRemainders, [12, 9, 36, 0]);
console.assert(test1b, 'Test 1 b');


obj1.modulo = 6;
obj2.modulo = 6;

const obj1ZeroRemainders2 = _;
const test2a = deepCompare(obj1ZeroRemainders2, [12, 36, 0]);
console.assert(test2a, 'Test 2 b');

const obj2ZeroRemainders2 = _;
const test2b = deepCompare(obj2ZeroRemainders2, [12, 36, 0]);
console.assert(test2b, 'Test 2 b');




// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
