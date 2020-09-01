// useful investigative methods

{
  const obj = {};
  obj.hasOwnProperty('x');
  obj.isPrototypeOf({});
  Object.getOwnPropertyNames(obj);
}


// hands-on (in debugger)
{

  const obj = {};
  console.assert(obj.__proto__ === Object.prototype);
  console.assert(obj.__proto__.__proto__ === null);

  const arr = [];
  console.assert(arr.__proto__ === Array.prototype);
  console.assert(arr.__proto__.__proto__ === Object.prototype);
  console.assert(arr.__proto__.__proto__.__proto__ === null);

  const es5 = function () { };
  console.assert(es5.__proto__ === Function.prototype);
  console.assert(es5.__proto__.__proto__ === Object.prototype);
  console.assert(es5.__proto__.__proto__.__proto__ === null);

  const es6 = () => { };
  console.assert(es6.__proto__ === Function.prototype);
  console.assert(es6.__proto__.__proto__ === Object.prototype);
  console.assert(es6.__proto__.__proto__.__proto__ === null);

}
{

  const obj = {};
  const obj__proto__ = obj.__proto__;
  const obj__proto____proto__ = obj.__proto__.__proto__;

  const arr = [];
  const arr__proto__ = arr.__proto__;
  const arr__proto____proto__ = arr.__proto__.__proto__;
  const arr__proto____proto____proto__ = arr.__proto__.__proto__.__proto__;

  const es5 = function () { };
  const es5__proto__ = es5.__proto__;
  const es5__proto____proto__ = es5.__proto__.__proto__;
  const es5__proto____proto____proto__ = es5.__proto__.__proto__.__proto__;

  const es6 = function () { };
  const es6__proto__ = es6.__proto__;
  const es6__proto____proto__ = es6.__proto__.__proto__;
  const es6__proto____proto____proto__ = es6.__proto__.__proto__.__proto__;

}

// proto lookup chain

{

  const ancestor = { onAncestor: true };
  console.assert(ancestor.hasOwnProperty('onAncestor') === true);

  const descendant = Object.create(ancestor);



}
