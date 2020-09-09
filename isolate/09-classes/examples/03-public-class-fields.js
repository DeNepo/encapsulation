'use strict';

/* public class fields

  you can set own instance properties using public class field syntax
  it looks like declaring a variable inside the class, but without let or const

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields

*/


class Demo {

  // PS. JS Tutor does not support this own property syntax
  //  comment the following line to study this in JS Tutor
  ownProperty = 'own property';

  delegatedMethod() {
    return this;
  };

}


const instance1 = new Demo();
const instance2 = new Demo();

const instance1HasOwnProperty = instance1.hasOwnProperty('ownProperty');
const instance2HasOwnProperty = instance2.hasOwnProperty('ownProperty');

