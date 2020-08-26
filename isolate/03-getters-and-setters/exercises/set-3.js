const obj1 = {
  entries: { first: 'hi!', second: 'bye!' },
  current: {},
  setCurrentEntry: function (key) {
    if (this.entries.hasOwnProperty(key)) {
      this.current = { [key]: this.entries[key] };
    } else {
      this.current = { [key]: `no entry with key "${key}"` }
    }
  }
}

const obj2 = {}

obj1.setCurrentEntry('second');
console.assert(obj1.current.second === "bye!", 'Test 1');

; // write this line
console.assert(obj2.current.second === "bye!", 'Test 2');


obj1.setCurrentEntry('first');
console.assert(obj1.current.first === "hi!", 'Test 3');
console.assert(obj1.current.hasOwnProperty('second') === false, 'Test 4');

; // write this line
console.assert(obj2.current.first === "hi!", 'Test 5');
console.assert(obj2.current.hasOwnProperty('second') === false, 'Test 6');


obj1.setCurrentEntry('hi');
console.assert(obj1.current.hi === 'no entry with key "hi"', 'Test 7');
console.assert(obj1.current.hasOwnProperty('first') === false, 'Test 8');

; // write this line
console.assert(obj2.current.hi === 'no entry with key "hi"', 'Test 9');
console.assert(obj2.current.hasOwnProperty('first') === false, 'Test 10');
