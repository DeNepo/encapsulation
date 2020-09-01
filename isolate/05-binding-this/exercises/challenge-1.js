'use strict';

// psst. use the debugger!

const writeMe = function (arg) { };

// don't change any code below this comment
const obj1 = { thing: 1 };
const bound1 = writeMe.bind(obj1);

const result1a = bound1(4);
const test1a = result1a === 5;
console.assert(test1a, 'Test 1.A');

const result1b = bound1('');
const test1b = result1b === '1';
console.assert(test1b, 'Test 1.B');



const obj2 = { thing: 2 };
const bound2 = writeMe.bind(obj2);

const result2a = bound2(true);
const test2a = result2a === 3;
console.assert(test2a, 'Test 2.A');

const result2b = bound2(-1);
const test2b = result2b === 1;
console.assert(test2b, 'Test 2.B');



const obj3 = { thing: 3 };
const bound3 = writeMe.bind(obj3);

const result3a = bound3('1');
const test3a = result3a === '13';
console.assert(test3a, 'Test 3.A');

const result3b = bound3('e');
const test3b = Number.isNaN(result3b);
console.assert(test3b, 'Test 3.B');
