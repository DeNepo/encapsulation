'use strict';

const manager = {
  entries: {},
  setEntry: function (key, value) {
    this.entries[key] = value;
  },
  deleteEntry: function (key) {
    delete this.entries[key];
  },
  readEntry: function (key) {
    return this.entries[key];
  }
};

manager.setEntry('a', 0);
manager.setEntry('b', 1);
manager.setEntry('c', 2);
const test1 = deepCompare(manager.entries, { "a": 0, "b": 1, "c": 2 });
console.assert(test1, 'Test 1');

manager.deleteEntry('b');
const test2 = deepCompare(manager.entries, { "a": 0, "c": 2 });
console.assert(test2, 'Test 2');

manager.setEntry('c', 4);
manager.setEntry('d', 5);
const test3 = deepCompare(manager.entries, { "a": 0, "c": 4, "d": 5 });
console.assert(test3, 'Test 3');

const readB = manager.readEntry('b');
const test4 = readB === undefined;
console.assert(test4, 'Test 4');

const readA = manager.readEntry('a');
const test5 = readA === 0;
console.assert(test5, 'Test 5');

manager.setEntry('b', true);
manager.setEntry('a', false);
manager.deleteEntry('c');
const test6 = deepCompare(manager.entries, { "a": false, "d": 5, "b": true });
console.assert(test6, 'Test 6');

manager.deleteEntry('a');
manager.deleteEntry('d');
manager.deleteEntry('b');
const test7 = deepCompare(manager.entries, {});
console.assert(test7, 'Test 7');



// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
