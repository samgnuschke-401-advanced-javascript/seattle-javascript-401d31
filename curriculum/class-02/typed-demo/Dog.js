'use strict';


class Animal {
  // Vinicio - a class needs a function
  // to create instances of itself
  // this will be the function that runs
  // when we use the 'new' keyword
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('Kali, don\'t pull!');
  }
}

class Dog extends Animal {

  constructor(name) {
    // Vinicio - here I have access to a function called super
    super(name);
  }

  speak() {
    console.log('BAAARK');
    console.log(this.name);
  }
}

// class LabradorRetriever extends Dog {
//
// }

module.exports = Dog;