

// native investigative methods
// static vs instance
//  static: on the class
//  instance: on the class' prototype


// static methods
{
  const obj = {
    x: 1
  };

  // 2 useful static Object methods
  const keysOfOb = Object.keys(obj);
  const valuesOfOb = Object.values(obj);
  const entriesOfOb = Object.entries(obj);
  const prototypeOfObj = Object.getPrototypeOf(obj);
}

{
  const arr = ['a', 'b', 'c'];
  const str = 'xyz';

  Array.isArray(arr);
  Array.isArray(str);

  Array.from(arr); // !== arr
  Array.from(str);

  Object.getPrototypeOf(arr);
  Object.getPrototypeOf(str);
}


// instance methods
{
  const obj = {
    x: 1
  };

  // 2 useful instance Object methods
  const objHasPropX = obj.hasOwnProperty('x');
  const objHasPropY = obj.hasOwnProperty('y');
}
