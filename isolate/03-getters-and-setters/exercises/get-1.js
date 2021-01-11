const obj1 = {
  name: 'obj1',
  beginning: "hi, I'm",
  getGreeting: function() {
    return `${this.beginning} ${this.name}`;
  },
};

const obj2 = {
  name: 'obj2',
  beginning: "hi, I'm",
  get greeting() {},
};

const obj1Greeting1 = obj1.getGreeting();
const test1 = obj1Greeting1 === `hi, I'm obj1`;
console.assert(test1, 'Test 1');

const obj2Greeting1 = _;
const test2 = obj2Greeting1 === `hi, I'm obj2`;
console.assert(test2, 'Test 2');

obj1.name = 'first';
obj2.name = 'second';

const obj1Greeting2 = obj1.getGreeting();
const test3 = obj1Greeting2 === `hi, I'm first`;
console.assert(test3, 'Test 3');

obj2.beginning = 'good bye';

const obj2Greeting2 = _;
const test4 = obj2Greeting2 === `good bye second`;
console.assert(test4, 'Test 4');
