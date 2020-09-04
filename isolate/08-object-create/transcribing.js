
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

