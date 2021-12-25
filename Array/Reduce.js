// Reduce Method

// Flatten an array means to convert the 3d or 2d array into a
// single dimensional array

// The Reduce() Method executes a reducer fuction (that you provide)
// on each element of the array, resulting in single output value.


// The reducer function takes four argumnets:

// Accumulator
// Current Value
// Current Index
// Source Array

// let arr = [2,5,6];

// let result = arr.reduce((accumulator, element, index, arr)=>{
//     return accumulator+=element;
// })

// console.log(result);
// op - 13




// what if we missed some value --   eg: 9 so we will put accumulator value initially as 9 

// let arr = [2,5,6];

// let result = arr.reduce((accumulator, element, index, arr)=>{
//     return accumulator+=element;
// }, 9)

// console.log(result);

// op- 22



// How to flatten an array
// conveting 3d array to 2d
// const  arr = [
//   [1,2],
//   [3,4],
// [6,7]
// ];
// let result = arr.reduce((accu, element) => {
//     return accu.concat(element);
// })
// console.log(result);
// op - [ 1, 2, 3, 4, 6, 7 ]




// another example - if we have nested array ??
// const  arr = [
//   [1,2],
//   [3,4],
// [6,[7,9]]
// ];
// let result = arr.reduce((accu, element) => {
//     return accu.concat(element);
// })
// console.log(result);
// op - [ 1, 2, 3, 4, 6, [ 7, 9 ] ]