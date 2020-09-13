'use strict';

/* Refactor: Prototype to Class

  Prototypes and Classes are similar behind the scenes
  but have quite different syntax and instantiation
  This refactor example shows how you can go from prototype to class
    while preserving the same behavior

*/

// the prototype

const coordinatesPrototype = {
  render: function () {
    return `( X: ${this.x}, Y: ${this.y} )`;
  },
  set coordinates(coords) {
    if (typeof coords.x === 'number') {
      this.x = coords.x;
    }
    if (typeof coords.y === 'number') {
      this.y = coords.y;
    }
  }
};


// refactored class

class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  render() {
    return `( X: ${this.x}, Y: ${this.y} )`;
  }
  set coordinates(coords) {
    if (typeof coords.x === 'number') {
      this.x = coords.x;
    }
    if (typeof coords.y === 'number') {
      this.y = coords.y;
    }
  }
};

const instanceA = new Coordinates(4, 2);
const instanceB = new Coordinates(0.3, 14);

// the tests

const test1a = instanceA instanceof Coordinates;
const test1b = instanceB instanceof Coordinates;
console.assert(test1a, 'Test 1.A - instanceof');
console.assert(test1b, 'Test 1.B');

const test2a = instanceA.hasOwnProperty('x') && instanceA.hasOwnProperty('y');
const test2b = instanceB.hasOwnProperty('x') && instanceB.hasOwnProperty('y');
console.assert(test2a, 'Test 2.A - own properties');
console.assert(test2b, 'Test 2.B');

const test3a = !instanceA.hasOwnProperty('render') && !instanceA.hasOwnProperty('coordinates');
const test3b = !instanceB.hasOwnProperty('render') && !instanceB.hasOwnProperty('coordinates');
console.assert(test3a, 'Test 3.A - not-own properties');
console.assert(test3b, 'Test 3.B');

const test4a = instanceA.render() === '( X: 4, Y: 2 )';
const test4b = instanceB.render() === '( X: 0.3, Y: 14 )';
console.assert(test4a, 'Test 4.A - render');
console.assert(test4b, 'Test 4.B');

instanceA.coordinates = { x: 5 };
instanceB.coordinates = { y: 0 };
const test5a = instanceA.x === 5 && instanceA.y === 2;
const test5b = instanceB.x === 0.3 && instanceB.y === 0;
console.assert(test5a, 'Test 5.A - set coordinates');
console.assert(test5b, 'Test 5.B');

const test6a = instanceA.render() === '( X: 5, Y: 2 )';
const test6b = instanceB.render() === '( X: 0.3, Y: 0 )';
console.assert(test6a, 'Test 6.A - render');
console.assert(test6b, 'Test 6.B');
