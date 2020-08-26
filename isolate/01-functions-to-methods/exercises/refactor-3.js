// refactor this function to a method
const remix = (str, mixer) => {
  return str.split('').join(mixer);
}

const obj = {
  mixer: '',
  remix: function (str) {

  }
};

const remix1 = obj.remix('hello');
const test1 = remix1 === 'hello';
console.assert(test1, 'Test 1');


obj.mixer = '-';

const remix2 = obj.remix('hello');
const test2 = remix2 === 'h-e-l-l-o';
console.assert(test2, 'Test 2');

const remix3 = obj.remix('hello');
const test3 = remix3 === 'h-e-l-l-o';
console.assert(test3, 'Test 3');


const test4 = obj.mixer === '-';
console.assert(test4, 'Test 4');
