'use strict';


const input = [1,2,3,4,5,6]; // O(n) space

// // non-recursive implementation (i.e. loops
// for(let i of input) {
//   console.log(i);
// }

// recursive implemantion: function that's going to call itself


// const printRecursively = (input, currentIndex) => {
//   //-----------------------------------------------------------------------------
//   // BASE CASE
//   //-----------------------------------------------------------------------------
//   //  Vinicio - I stop calling myself in the base case
//   if (currentIndex === input.length -1) {
//     console.log(input[currentIndex]);
//     return; // Vinicio - stop the recursion
//   }
//   //-----------------------------------------------------------------------------
//   // RECURSIVE CASE
//   //-----------------------------------------------------------------------------
//   //  Vinicio - I'm going to call myself here
//   console.log(input[currentIndex]);
//   printRecursively(input, currentIndex + 1);
//   //-----------------------------------------------------------------------------
// };
//
//
// printRecursively(input, 0);


const addTwoNumbers = (a, b) => a + b;


console.log(addTwoNumbers(1,10));


const addRecursively = (a,b) => {
  //Base case
  if(b <=0) {
    // Vinicio - returns are very important in a recursive process
    return a;
  }
  // Recursive Case
  // Vinicio - take a look at how we are getting closer and closer to the final answer
  return addRecursively(a + 1, b -1);
};


console.log(addRecursively(10, 2));







