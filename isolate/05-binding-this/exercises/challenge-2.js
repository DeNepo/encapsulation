'use strict';

// psst. use the debugger!

// don't change this code
const objA = { thing: '' };
const objB = { thing: 3 };
const objC = { thing: false };

// do write code here

const writeMe = function () { }

const boundA = _;
const boundB = _;
const boundC = _;

// don't change this code

const result1 = boundA() + 1;
const test1 = result1 === '1';
console.assert(test1, 'Test 1');

const result2 = boundA() + false;
const test2 = result2 === 'false';
console.assert(test2, 'Test 2');

const result3 = boundB() + undefined;
const test3 = Number.isNaN(result3);
console.assert(test3, 'Test 3');

const result4 = boundB() + '';
const test4 = result4 === '3';
console.assert(test4, 'Test 4');

const result5 = boundC() + null;
const test5 = result5 === 0;
console.assert(test5, 'Test 5');

const result6 = boundC() + 12;
const test6 = result6 === 12;
console.assert(test6, 'Test 6');
