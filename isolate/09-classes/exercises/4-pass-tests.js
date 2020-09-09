'use strict';

// write the class
//  hint: initial state --> { evens: [], odds: [], nanys: [] }
//  hint: your constructor should organize the array of strings into the correct state arrays


// these lines are correct! don't change them
const instanceA = new Stringanizer(['3', '2', 'e', '']);
const instanceB = new Stringanizer(['5', '!', '-0']);

// the tests

const test1a = instanceA instanceof Stringanizer;
const test1b = instanceB instanceof Stringanizer;
console.assert(test1a, 'Test 1.A - instanceof');
console.assert(test1b, 'Test 1.B ');

const test2a = instanceA.hasOwnProperty('state');
const test2b = instanceB.hasOwnProperty('state');
console.assert(test2a, 'Test 2.A - own properties');
console.assert(test2b, 'Test 2.B');

const test3a = !instanceA.hasOwnProperty('addString') && !instanceA.hasOwnProperty('all');
const test3b = !instanceB.hasOwnProperty('addString') && !instanceB.hasOwnProperty('all');
console.assert(test3a, 'Test 3.A - not-own properties');
console.assert(test3b, 'Test 3.B');

const test4a = deepCompare(instanceA.state, {
  evens: ["", "2"],
  odds: ["3"],
  nanys: ["e"]
});
const test4b = deepCompare(instanceB.state, {
  evens: ["-0"],
  odds: ["5"],
  nanys: ["!"]
});
console.assert(test4a, 'Test 4.A - initial values');
console.assert(test4b, 'Test 4.B');

const test5a = deepCompare(instanceA.all("evens"), '2,');
const test5b = deepCompare(instanceB.all("evens"), '-0');
console.assert(test5a, 'Test 5.A - .all("evens")');
console.assert(test5b, 'Test 5.B');

const test6a = deepCompare(instanceA.all("odds"), '3');
const test6b = deepCompare(instanceB.all("odds"), '5');
console.assert(test6a, 'Test 6.A - .all("odds")');
console.assert(test6b, 'Test 6.B');

const test7a = deepCompare(instanceA.all("nanys"), 'e');
const test7b = deepCompare(instanceB.all("nanys"), '!');
console.assert(test7a, 'Test 7.A - .all("nanys")');
console.assert(test7b, 'Test 7.B');

instanceA.addString('*');
instanceA.addString('1');
instanceA.addString('12');

instanceB.addString('8');
instanceB.addString('I0');
instanceB.addString('9');

const test8a = deepCompare(instanceA.state, {
  evens: ["", "2", "12"],
  odds: ["3", "1"],
  nanys: ["e", "*"]
});
const test8b = deepCompare(instanceB.state, {
  evens: ["-0", "8"],
  odds: ["5", "9"],
  nanys: ["!", "I0"]
});
console.assert(test8a, 'Test 8.A - new values');
console.assert(test8b, 'Test 8.B');

const test9a = deepCompare(instanceA.all("evens"), '2,,12');
const test9b = deepCompare(instanceB.all("evens"), '-0,8');
console.assert(test9a, 'Test 9.A - .all("evens")');
console.assert(test9b, 'Testt 9.B');

const test10a = deepCompare(instanceA.all("odds"), '3,1');
const test10b = deepCompare(instanceB.all("odds"), '5,9');
console.assert(test10a, 'Test 10.A - .all("odds")');
console.assert(test10b, 'Test 10.B');

const test11a = deepCompare(instanceA.all("nanys"), 'e,*');
const test11b = deepCompare(instanceB.all("nanys"), '!,I0');
console.assert(test11a, 'Test 11.A - .all("nanys")');
console.assert(test11b, 'Test 11.B');



// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
