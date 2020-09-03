
{ // useful native methods

  Object.prototype.isPrototypeOf(obj);
  // vs

}

{ // own properties

  const ancestor = { onAncestor: true };

  const test1 = ancestor.hasOwnProperty('onAncestor')
    === true ? 'pass' : 'fail';

  const descendant = Object.create(ancestor);
  descendant.onDescendant = true;

  const test2 = ancestor.isPrototypeOf(descendant)
    === true ? 'pass' : 'fail';

  const test3 = descendant.onDescendant
    === true ? 'pass' : 'fail';

  const test4 = descendant.onAncestor
    === true ? 'pass' : 'fail';

  const test5 = descendant.hasOwnProperty('onAncestor')
    === false ? 'pass' : 'fail';


}

// { // own properties

//   const ancestor = { onAncestor: true };
//   console.log('ancestor:', ancestor);
//   console.log('ancestor.onAncestor:', ancestor.onAncestor);
//   console.log('own property names', Object.getOwnPropertyNames(ancestor));

//   const test1 = ancestor.hasOwnProperty('onAncestor') === true;
//   console.assert(test1, '1. ancestor has own property "onAncestor"');

//   const descendant = Object.create(ancestor, { onDescendant: { value: true } });
//   console.log('descendant:', descendant);
//   console.log('descendant.onDescendant:', descendant.onDescendant);
//   console.log('descendant.onAncestor:', descendant.onAncestor);
//   console.log('own property names', Object.getOwnPropertyNames(descendant));

//   const test2 = ancestor.isPrototypeOf(descendant) === true;
//   console.assert(test2, '2. ancestor is prototype of descendant');

//   const test3 = descendant.onDescendant === true;
//   console.assert(test3, '3. descendent has access to property "onDescendant"');

//   const test4 = descendant.onAncestor === true;
//   console.assert(test4, '4. descendent has access to property "onAncestor"');

//   const test5 = descendant.hasOwnProperty('onAncestor') === false;
//   console.assert(test5, '5. descendent does not have own property "onAncestor"');


// }


{ // incrementor

  const incrementorProto = {
    increment: function (toAdd) {
      this.state.value += toAdd;
    }
  };

  const instance_1 = Object.create(incrementorProto);
  instance_1.state = {
    value: 0,
  };
  instance_1.increment(3);
  instance_1.increment(-2);

  // console.log(Object.keys(instance_1))
  // console.log(Object.getOwnPropertyNames(instance_1))

  const instance_2 = Object.create(incrementorProto);
  instance_2.state = {
    value: 14,
  };
  instance_2.increment(-2);
  instance_2.increment(10);

}

{ // searchable

  const searchableProto = {
    addPhrase: function (newWord) {
      this.state.phrases.push(newWord);
    },
    searchPhrases: function (query) {
      const matchingEntries = this.state.phrases
        .filter((string) => string.includes(query));
      return matchingEntries;
    }
  };


  const instance_1 = Object.create(searchableProto);
  instance_1.state = {
    phrases: [],
  };
  instance_1.addPhrase('board');
  instance_1.addPhrase('toad');
  const search_1a = instance_1.searchPhrases('oa');
  const search_1b = instance_1.searchPhrases('rd');


  const instance_2 = Object.create(searchableProto);
  instance_2.state = {
    phrases: [],
  };
  instance_2.addPhrase('brussels');
  instance_2.addPhrase('belgium');
  const search_2a = instance_2.searchPhrases('um');
  const search_2b = instance_2.searchPhrases('el');

}

// exercise spering

{ // exercise 1

  const ancestor = _;

  const descendant_1 = Object.create(_);
  const descendant_2 = Object.create(_);

  console.assert(descendant_1.name === '_');
  console.assert(descendant_2._ === 'tod');

  console.assert(descendant_1.__proto__ === ancestor)
  console.assert(descendant_2.__proto__ === ancestor)

}

{ // exercise 2

  // fill in this object
  const person = {

  };

  const tom = Object.create(person);
  tom.name = 'Tom';
  const tomGreets = tom.greeting;
  console.assert(tomGreets === "Hi, I'm Tom", 'Test: Tom');

  const sonia = Object.create(person);
  sonia.name = 'Sonia';
  const soniaGreets = sonia.greeting;
  console.assert(soniaGreets === "Hi, I'm Sonia", 'Test: Sonia');

}


// over-writing methods
