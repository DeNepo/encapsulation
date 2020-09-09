'use strict';

/* class

  classes are syntax that help you to work with prototypes
  it's important to understand that they do not change how prototypes work behind the scenes

  classes are actually just fancy functions!

  Study Hint:  study the prototype diagrams alongside this code

*/


class Demo { }

const typeofDemo = typeof Demo;

// classes delegate to Function.prototype, just like normal functions
const Demo__proto__ = Demo.__proto__;
const Demo__proto__IsFunctionPrototype = Demo.__proto__ === Function.prototype;

// the rest of our class's delegation chain
const Demo__proto____proto__ = Demo.__proto__.__proto__;
const Demo__proto____proto__IsObjectPrototype = Demo.__proto__.__proto__ === Object.prototype;

const Demo__proto____proto____proto__ = Demo.__proto__.__proto__.__proto__;
const Demo__proto____proto____proto__IsNull = Demo.__proto__.__proto__.__proto__ === null;

