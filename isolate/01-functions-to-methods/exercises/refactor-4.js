// refactor this function to a method
const remix = (str, mixer) => {
  return str.split('').join(mixer);
}

const obj = {
  mixer: '',
  remixed: '',
  remix: function (str) { }
};

obj.remix('hello');
console.assert(obj.remixed === 'hello', 'Test 1');

obj.remix('hello');
console.assert(obj.getRemixed() === 'hello', 'Test 2');

obj.mixer = '-';
obj.remix('hello');
console.assert(obj.remixed === 'h-e-l-l-o', 'Test 3');
console.assert(obj.getRemixed() === 'h-e-l-l-o', 'Test 4');
console.assert(obj.mixer === '-', 'Test 5');

obj.mixer = '0';
obj.remix('111');
console.assert(obj.remixed === '10101', 'Test 6');
console.assert(obj.getRemixed() === '10101', 'Test 7');
console.assert(obj.mixer === '0', 'Test 8');
