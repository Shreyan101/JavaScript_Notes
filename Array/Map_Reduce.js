// Array - 
// Map and Reduce Method

// Array.prototype.map()

// let newArray = arr.map(callback[, index[, array]])
// return element for newArray, after executing smtng
// }[, thisArg]);

// returns a new array containing the results of calling a
// function on every element in this array.

// const array1 = [1,4,9,16,25];

// let newArr = array1.map((element, index, arr)=>{
//     return element>9;
// })

// console.log(newArr);

// op - [ false, false, false, true, true ]

// Remenber it returns new array
// const array1 = [1,4,9,16,25];

// let newArr = array1.map((element, index, array1)=>{
//   return `Index no = ${index} and the value is ${element} belong to ${array1}`;
// })

// console.log(newArr);


// op - 
// [
//     'Index no = 0 and the value is 1 belong to 1,4,9,16,25', 
//     'Index no = 1 and the value is 4 belong to 1,4,9,16,25', 
//     'Index no = 2 and the value is 9 belong to 1,4,9,16,25', 
//     'Index no = 3 and the value is 16 belong to 1,4,9,16,25',
//     'Index no = 4 and the value is 25 belong to 1,4,9,16,25' 
//   ]



// Remember
// it returns new array without mutating the original array
// [1,4,9,16,25]
// [ false, false, false, true, true ]
