'use strict';

/* constructor method

  classes can have a special method called `constructor`
  you can use this method to do custom logic when an instance is created

  remember that classes are actually functions?
  well, the constructor is the body of your class function! confusing enough yet?
  when you call a class the constructor is executed
  any arguments passed to the class are available inside the constructor

  the `new` keyword tells JS that `this` inside the constructor should be your new instance
  you can use the constructor method to prepare the instance before it is released into your program


  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

*/


class Cat {

  state = {}

  constructor(name = '', age = 0) {
    this.state.name = name;
    if (typeof age === 'number' && age >= 0) {
      this.state.age = age;
    }
  }

  get description() {
    if (this.state.hasOwnProperty('age')) {
      return `a ${this.state.age} year old cat named ${this.state.name}`;
    } else {
      return `a cat named ${this.state.name}`;
    }
  };

}

const rupertAge12 = new Cat('rupert', 12);
const rupertDescription = rupertAge12.description;

const josephineAge0 = new Cat('josephine');
const josephineDescription = josephineAge0.description;

const martinAgeNone = new Cat('martin', true);
const martinDescription = martinAgeNone.description;



