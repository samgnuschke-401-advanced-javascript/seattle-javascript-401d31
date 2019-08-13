'use strict';

// Functional

let numbers = [1,2,3];

const functionalSquares = ([...list]) => {
  for( let i = 0; i < list.length; i++ ) {
    list[i] = list[i] * list[i];
  }
  return list;
};

let newNumbersFunctional = functionalSquares(numbers);
console.log(newNumbersFunctional);
console.log(numbers);


// Non-Functional Examples
// What are the non-functional issues here?

numbers = [1,2,3];

const squares = (list) => {
  for( let i = 0; i < list.length; i++ ) {
    list[i] = list[i] * list[i];
  }

  return list;
};

let newNumbers = squares(numbers);
console.log(newNumbers);
console.log(numbers);


// Get Data
function getData(url) {
  // return superagent.get(url).then( data => data.body );
}

// Non-Functional --- using data
function sayHello(name) {
  console.log( `Hi, ${name}` );
}

function sayHi(name) {
  sayHello(name);
}


function greet(person) {
  return function(greeting) {
    console.log(`${greeting}, ${person}`);
  };
}

var hello = greet('john');
console.log( hello('shut up') );
