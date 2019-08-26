'use strict';

// // -------------------------------------------------------------------------------
// // Head Recursion
// // Mott: Solve a little bit of the problem and solve the rest 'recursively'
// // -------------------------------------------------------------------------------
// const headRecursion = (array, currentIndex = 0) => {
//   if (currentIndex === array.length -1) {
//     // Vinicio - I know that I'm at the end of the array,
//     // the array has only one value left, so that must be the sum
//     return array[currentIndex];
//   } else {
//     const restOfTheArray = headRecursion(array, currentIndex + 1);
//     return array[currentIndex] + restOfTheArray;
//   }
// };
//
//
// // return f(); --> tail recursion
// // return f() AND ANYTHING ELSE; --> head recursion
//
//
// // -------------------------------------------------------------------------------
// // Tail Recursion -> can be optimized in a process called TCO
// // (Tail Call Optimization)
// const sumAllElementsInArray = (array, currentIndex = 0, sum =0) =>{
//   if(currentIndex === array.length - 1) {
//     // Vinicio - am I at the end of the array?
//     return sum + array[currentIndex];
//   } else {
//     return sumAllElementsInArray(array, currentIndex + 1,
//       sum + array[currentIndex]);
//   }
// };
// // -------------------------------------------------------------------------------
//
// console.log(headRecursion([1,2,3,4,5]));
//
//
// // Where and How you make your recursive call













const spaceComplexity = (input) => {
  let storage = {};
  for(let value of input) {
    storage[value] = input.slice();
  }
};

spaceComplexity([1,2,3,4,5,7,8,7,8]);
















