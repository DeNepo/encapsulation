'use strict';

/* new ClassName();

  classes are a simpler way to write code that uses prototypes
  they don't change anything about how JS prototypes and delegation work

  inside a class declaration you must use ; instead of ,

*/


class Demo {

  delegatedMethod() {
    return this;
  };

}

const DemoPrototype = Demo.prototype;

const instance1 = new Demo();
const instance2 = new Demo();

const instance1__proto__ = instance1.__proto__;
const instance1__proto__IsDemoPrototype = instance1.__proto__ === Demo.prototype;

const instance2__proto__ = instance2.__proto__;
const instance2__proto__IsDemoPrototype = instance2.__proto__ === Demo.prototype;


