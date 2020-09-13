`use strict`;

/* Refactor: Object Literals to a class

  Using classes and inheritance is all about abstraction and code reuse
  This example shows how you can refactor repetitive object literals in to a class

*/

// object literals

const literalA = {
  state: {
    x: 4,
    y: 2,
  },
  render: function () {
    return `( X: ${this.state.x}, Y: ${this.state.y} )`;
  },
  set coordinates(coords) {
    if (typeof coords.x === 'number') {
      this.state.x = coords.x;
    }
    if (typeof coords.y === 'number') {
      this.state.y = coords.y;
    }
  }
};

const literalB = {
  state: {
    x: 0.3,
    y: 14,
  },
  render: function () {
    return `( X: ${this.state.x}, Y: ${this.state.y} )`;
  },
  set coordinates(coords) {
    if (typeof coords.x === 'number') {
      this.state.x = coords.x;
    }
    if (typeof coords.y === 'number') {
      this.state.y = coords.y;
    }
  }
};

// refactored class

class Coordinates {
  state = {
    x: 0,
    y: 0
  };
  constructor(x, y) {
    this.state.x = x;
    this.state.y = y;
  }
  render() {
    return `( X: ${this.state.x}, Y: ${this.state.y} )`;
  }
  set coordinates(coords) {
    if (typeof coords.x === 'number') {
      this.state.x = coords.x;
    }
    if (typeof coords.y === 'number') {
      this.state.y = coords.y;
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

const test2a = instanceA.hasOwnProperty('state');
const test2b = instanceB.hasOwnProperty('state');
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
const test5a = instanceA.state.x === 5 && instanceA.state.y === 2;
const test5b = instanceB.state.x === 0.3 && instanceB.state.y === 0;
console.assert(test5a, 'Test 5.A - set coordinates');
console.assert(test5b, 'Test 5.B');

const test6a = instanceA.render() === '( X: 5, Y: 2 )';
const test6b = instanceB.render() === '( X: 0.3, Y: 0 )';
console.assert(test6a, 'Test 6.A - render');
console.assert(test6b, 'Test 6.B');
