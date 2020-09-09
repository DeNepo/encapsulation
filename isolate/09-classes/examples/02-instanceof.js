'use strict';

/* instanceof

  the `instanceof` operator tells you if a class's prototype is in an object's delegation chain

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

*/


class Demo {

  delegatedMethod() {
    return this;
  };

}

const instance1 = new Demo();
const instance2 = new Demo();

const instance1instanceofDemo = instance1 instanceof Demo;
const instance2instanceofDemo = instance2 instanceof Demo;

const instance1instanceofObject = instance1 instanceof Object;
const instance2instanceofObject = instance2 instanceof Object;

const instance1instanceofArray = instance1 instanceof Array;
const instance2instanceofArray = instance2 instanceof Array;


