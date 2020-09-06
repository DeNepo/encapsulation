'use strict';

/* Own data, delegated logic

  so what's all `this` and prototypes good for?

    reusing code!

  Using delegation and `this` you can write your logic once
  and use it on different instances with their own unique data

*/

{
  console.log('-- simple counters --');

  const counterPrototype = {
    up: function () {
      this.count += 1;
    },
    down: function () {
      this.count -= 1;
    }
  };

  const counter1 = Object.create(counterPrototype);
  counter1.id = 1;
  counter1.count = 0;

  const counter2 = Object.create(counterPrototype);
  counter2.id = 2;
  counter2.count = 18;

  counter1.up();
  counter1.up();
  counter2.up();
  counter1.down();
  counter2.up();
  counter2.down();
  counter2.down();
  counter1.down();

  const counter1Test = counter1.count === 0;
  const counter2Test = counter2.count === 18;

  console.log('counter prototype:', counterPrototype);
  console.log('counter 1:', counter1);
  console.log('counter 2:', counter2);

}


{
  console.log('-- biggest, smallest --');

  const bigSmallPrototype = {
    addNumber: function (newNumber) {
      this.state.all.push(newNumber);
      if (newNumber > this.state.biggest) {
        this.state.biggest = newNumber;
      }
      if (newNumber < this.state.smallest) {
        this.state.smallest = newNumber;
      }
    },
  };

  const bigSmall1 = Object.create(bigSmallPrototype);
  bigSmall1.id = 1;
  bigSmall1.state = {
    smallest: Infinity,
    biggest: -Infinity,
    all: [],
  };

  const bigSmall2 = Object.create(bigSmallPrototype);
  bigSmall2.id = 2;
  bigSmall2.state = {
    smallest: Infinity,
    biggest: -Infinity,
    all: [],
  };


  bigSmall1.addNumber(-2);
  bigSmall1.addNumber(1);
  bigSmall2.addNumber(-2);
  bigSmall2.addNumber(-3);
  bigSmall1.addNumber(0);
  bigSmall1.addNumber(18);
  bigSmall1.addNumber(18);
  bigSmall2.addNumber(18);



  console.log('bigSmallPrototype:', bigSmallPrototype);
  console.log('bigSmall1:', bigSmall1);
  console.log('bigSmall2:', bigSmall2);

}
