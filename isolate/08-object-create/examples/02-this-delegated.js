'use strict';

/* `this`, delegated

  `this` references the object currently calling the method

*/


{
  console.log('-- returning `this` from delegated method --');

  const sharedPrototype = {
    returnThis: function () {
      return this;
    }
  };

  const sharedPrototypeReturnedThis = sharedPrototype.returnThis();
  const test0 = sharedPrototypeReturnedThis === sharedPrototype;
  console.assert(test0, '0. `this` refers to prototype when called on prototype');


  const instance1 = Object.create(sharedPrototype);
  instance1.id = 1;

  const instance2 = Object.create(sharedPrototype);
  instance2.id = 2;


  const instance1ReturnedThis = instance1.returnThis();
  const test1 = instance1ReturnedThis === instance1;
  console.assert(test1, '1. `this` references instance 1 when called on instance 1');


  const instance2ReturnedThis = instance2.returnThis();
  const test2 = instance2ReturnedThis === instance2;
  console.assert(test2, '2. `this` references instance 2 when called on instance 2');


  console.log('sharedPrototype:', sharedPrototype);
  console.log('instance 1:', instance1);
  console.log('instance 2:', instance2);

}



{
  console.log('-- accessing own properties with delegated methods --');

  const sharedPrototype = {
    returnId: function () {
      return this.id;
    }
  };

  const sharedPrototypeReturnedId = sharedPrototype.returnId();
  const test0 = sharedPrototypeReturnedId === undefined;
  console.assert(test0, '0. `this.id` is undefined when called on prototype');


  const instance1 = Object.create(sharedPrototype);
  instance1.id = 1;

  const instance2 = Object.create(sharedPrototype);
  instance2.id = 2;


  const instance1ReturnedId = instance1.returnId();
  const test1 = instance1ReturnedId === 1;
  console.assert(test1, '1. `this.id` is 1 when called on instance 1');


  const instance2ReturnedId = instance2.returnId();
  const test2 = instance2ReturnedId === 2;
  console.assert(test2, '2. `this.id` is 2 when called on instance 2');


  console.log('sharedPrototype:', sharedPrototype);
  console.log('instance 1:', instance1);
  console.log('instance 2:', instance2);

}



