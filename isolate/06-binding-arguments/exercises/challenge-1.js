'use strict';

// psst. use the debugger!

function writeMe(boundArg, freeArg) { }

// don't change any code below this comment
const obj1 = { thing: 1 };
const obj2 = { thing: 2 };

const bound1A = writeMe.bind(obj1, 'A');
const bound1B = writeMe.bind(obj1, 'B');
const bound2C = writeMe.bind(obj2, 'C');
const bound2D = writeMe.bind(obj2, 'D');

const result1 = bound1A(' :)');
const test1 = result1 === '1A :)';
console.assert(test1, 'Test 1');

const result2 = bound1B(' :(');
const test2 = result2 === '1B :(';
console.assert(test2, 'Test 2');

const result3 = bound2C(' :O');
const test3 = result3 === '2C :O';
console.assert(test3, 'Test 3');

const result4 = bound2D(' :p');
const test4 = result4 === '2D :p';
console.assert(test4, 'Test 4');
