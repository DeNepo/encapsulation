'use strict';

/* static properties

  using the `static` keyword attaches a property to the class itself, not the .prototype

  instances do not have access to static methods, you need to call them from the class
    NO:   instance.staticMethod();
    YES:  ClassName.staticMethod();

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

*/


class Demo {

  static staticMethod() {
    return this;
  }

  instanceMethod() {
    return this;
  }
}

const DemoPrototype = Demo.prototype;

const DemoStaticMethod = Demo.staticMethod;
const DemoInstanceMethod = Demo.instanceMethod;

const DemoReturned = Demo.staticMethod();



const instance = new Demo();

const instance__proto__ = instance.__proto__;

const instanceStaticMethod = instance.staticMethod;
const instanceInstanceMethod = instance.instanceMethod;

const instanceReturned = instance.instanceMethod();


// using static and instance methods incorrectly will throw an error

try {
  Demo.instanceMethod();
} catch (err) {
  console.error(err);
}

try {
  instance.staticMethod();
} catch (err) {
  console.error(err);
}

