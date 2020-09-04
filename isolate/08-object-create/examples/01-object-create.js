'use strict';

/* Object.create

  this static method creates a new object with your choice of prototype

*/


{
  console.log('basic example');

  const objectA = { id: 'a' };

  const objectB = Object.create(objectA);
  objectB.id = 'b';

  const objectC = Object.create(objectB);
  objectC.id = 'c';

  console.log('object a:', objectA);
  console.log('object b:', objectB);
  console.log('object c:', objectC);

}



{
  console.log('more realistic example');

  const sharedPrototype = {
    delegatedProperty: 'hello from prototype!'
  };

  const test1 = sharedPrototype.hasOwnProperty('delegatedProperty') === true;


  const instanceA = Object.create(sharedPrototype);
  instanceA.ownProperty = 'hello from instance A';

  const instanceB = Object.create(sharedPrototype);
  instanceB.ownProperty = 'hello from instance B';


  const test2a = Object.getPrototypeOf(instanceA) === sharedPrototype;
  const test2b = Object.getPrototypeOf(instanceB) === sharedPrototype;


  const test3a = instanceA.ownProperty === 'hello from instance A';
  const test3b = instanceB.ownProperty === 'hello from instance B';

  const test4a = instanceA.hasOwnProperty('ownProperty') === true;
  const test4b = instanceB.hasOwnProperty('ownProperty') === true;


  const test5a = instanceA.delegatedProperty === 'hello from prototype!';
  const test5b = instanceB.delegatedProperty === 'hello from prototype!';

  const test6a = instanceA.hasOwnProperty('delegatedProperty') === false;
  const test6b = instanceB.hasOwnProperty('delegatedProperty') === false;



  console.log('sharedPrototype:', sharedPrototype);
  console.log('instance A:', instanceA);
  console.log('instance B:', instanceB);


}
