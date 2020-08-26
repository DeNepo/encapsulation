'use strict';

// psst, be sure to use JS Tutor or Debugger!

const typeSorter = {
  types: {
    string: [],
    number: [],
    boolean: [],
    'undefined': [],
    object: [],
  },
  addNewValue: function (newValue) {
    const type = typeof newValue;
    this.types[type].push(newValue);
  },
};

typeSorter.addNewValue('hi');
typeSorter.addNewValue('bye');
typeSorter.addNewValue('');
typeSorter.addNewValue('4');
const stringsTest = deepCompare(typeSorter.types.string, ['hi', 'bye', '', '4']);
console.assert(stringsTest, 'Test 1: string');


typeSorter.addNewValue(Infinity);
typeSorter.addNewValue(NaN);
typeSorter.addNewValue(0);
typeSorter.addNewValue(12.3);
const numbersTest = deepCompare(typeSorter.types.number, [Infinity, NaN, 0, 12.3]);
console.assert(numbersTest, 'Test 2: number');


typeSorter.addNewValue(true);
typeSorter.addNewValue(false);
const booleansTest = deepCompare(typeSorter.types.boolean, [true, false]);
console.assert(booleansTest, 'Test 3: boolean');


typeSorter.addNewValue(undefined);
typeSorter.addNewValue();
const undefinedTest = deepCompare(typeSorter.types.undefined, [undefined, undefined]);
console.assert(undefinedTest, 'Test 4: undefined');


typeSorter.addNewValue(null);
typeSorter.addNewValue([]);
typeSorter.addNewValue({});
const nullTest = deepCompare(typeSorter.types.object, [null, [], {}]);
console.assert(nullTest, 'Test 5: object');




// hoisted testing dependency
function deepCompare(actual, expect) { return /* compare primitives & references */ actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && /* compare arrays */ (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || /* compare objects */ Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key]))); };
