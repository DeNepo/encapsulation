'use strict';

const object = {
  _numbers: [],
  getNumbers() {
    return this._numbers;
  },
  addNumber(value) {
    this._numbers.push(value);
  },
  getEvenNumbers() {
    return this.getNumbers().filter(value => value % 2 === 0);
  },
  sum() {
    return this.getNumbers().reduce((sum, current) => (sum += current), 0);
  },
  sumOfEvenNumbers() {
    return this.getEvenNumbers().reduce((sum, current) => (sum += current), 0);
  },
};

object.addNumber(2);
object.addNumber(3);
object.addNumber(4);
object.addNumber(1);

const test1 = deepCompare(object.getNumbers(), [2, 3, 4, 1]);
console.assert(test1, 'It can retrieve numbers.');

const test2 = deepCompare(object.getEvenNumbers(), [2, 4]);
console.assert(test2, 'It can retrieve even numbers.');

const test3 = object.sum() === 10;
console.assert(test3, 'It can retrieve sum of numbers.');

const test4 = object.sumOfEvenNumbers() === 6;
console.assert(test4, 'It can retrieve sum of even numbers.');




// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
