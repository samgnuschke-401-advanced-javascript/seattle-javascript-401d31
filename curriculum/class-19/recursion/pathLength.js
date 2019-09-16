'use strict';



const pathLength = (root, parent,child) => {
  if(root === null) {
    return null;
  }
  if(root.value === parent) {
    return countPathLength(root, child, 0);
  } else {
    return pathLength(root.left, parent, child)
      || pathLength(root.right, parent, child);
  }
};


const countPathLength = (root, child, lengthSoFar) => {
  if(root === null) {
    return null;
  }

  if(root.value === child) {
    return lengthSoFar;
    // Vinicio - return a truthy value AND stop the recursion
  } else {
    console.log('---------------------------');
    return countPathLength(root.left, child, lengthSoFar +1)
      || countPathLength(root.right,child, lengthSoFar + 1 );
  }
};


const Node = require('./Node');


const ten = new Node(10);
const seven = new Node(7);
const five = new Node(5);
const one = new Node(1);
const two = new Node(2);

const eleven = new Node(11);
const twelve = new Node(12);

const twenty = new Node(20);


// ----------------------------------------
five.left = one;
five.right = two;

ten.left = seven;
ten.right = five;

seven.left = eleven;
seven.right = twelve;

one.right = twenty;

console.log(pathLength(ten,5, 20));