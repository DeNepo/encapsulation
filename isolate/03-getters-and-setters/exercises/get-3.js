const obj1 = {
  entries: { first: 'hi!', second: 'bye!' },
  currentKey: 'second',
  getCurrentEntry: function () {
    return this.entries[this.currentKey];
  }
}

const obj2 = {}

// fill in the blanks to pass the asserts:

const obj1current1 = __;
console.assert(obj1current1 === 'bye!', 'Test 1');

const obj2current1 = __;
console.assert(obj2current1 === 'bye!', 'Test 2');

obj1.currentKey = __;
obj2.currentKey = __;

const obj1current2 = __;
console.assert(obj1current2 === 'hi!', 'Test 3');

const obj2current2 = __;
console.assert(obj2current2 === 'hi!', 'Test 4');
