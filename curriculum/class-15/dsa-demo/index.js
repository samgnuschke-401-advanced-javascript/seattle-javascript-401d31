"use strict";

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

// 1 - draw the tree
// 2 - write two paragraphs
//   - how does stackDepthFirst traverse the tree
//   - how does recursiveDepthFirst traverse the tree
// ----------------------------------------

// console.log(ten);


const stackDepthFirst = (root) => {
  const stack = []; // Vinicio - you know now, that anything can be a stack
  // if you use it as a stack

  stack.push(root);
  while(stack.length > 0) {
    const currentNode = stack.pop();
    console.log(currentNode.value);

    if(currentNode.left !== null)
      stack.push(currentNode.left);

    if(currentNode.right !== null)
      stack.push(currentNode.right);
  }
};

const recursiveDepthFirst = (node) => {
  // ------------------------------------
  // Base Case
  // ------------------------------------
  if(node === null) {
    return;
  }
  // ------------------------------------
  // Recursive Case
  // ------------------------------------
  // Depending on where you put the console, you can end
  // with three different "flavors" of DFT:
  // pre-order
  // in order
  // post order
  console.log(node.value);
  recursiveDepthFirst(node.left); // vinicio - "pushing" values into the call stack
  recursiveDepthFirst(node.right); // vinicio - "pushing" values into the call stack
};

// recursiveDepthFirst(ten);
// console.log('--------------------');
stackDepthFirst(ten);
