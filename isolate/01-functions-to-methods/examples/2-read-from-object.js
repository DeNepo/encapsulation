// pure function that returns the sum
const sum = (a, b) => {
  return a + b
};
console.assert(7 === sum(3, 4), 'Test 1');
console.assert(9 === sum(5, 4), 'Test 2');


// object method that uses a value stored in the object
const obj = {
  a: 0,
  sum: function (b) {
    return this.a + b
  }
};

// methods can get "arguments" from their object
obj.a = 3;
console.assert(7 === obj.sum(4), 'Test 3');
obj.a = 5;
console.assert(9 === obj.sum(4), 'Test 4');
// notice: same argument, different return values!
// object methods are not always pure functions
