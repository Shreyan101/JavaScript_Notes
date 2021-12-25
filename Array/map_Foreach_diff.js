// Difference between Map anf Foreach()

// let arr = [1,2,3,4,5];
// let newArr = arr.map((element, index, arr) => {
//     return `Index no ${index} value is ${element} and array is ${arr}`;
// })
// console.log(newArr);
// op - 
// it returns new array
// [
//     'Index no 0 value is 1 and array is 1,2,3,4,5',
//     'Index no 1 value is 2 and array is 1,2,3,4,5',
//     'Index no 2 value is 3 and array is 1,2,3,4,5',
//     'Index no 3 value is 4 and array is 1,2,3,4,5',
//     'Index no 4 value is 5 and array is 1,2,3,4,5' 
//   ]
// we can atatch some other methods with map()
// like reduce() , sort(), filter()


// using ForEach()

// let arr = [1,2,3,4,5];
// let newArr = arr.forEach((element, index, arr) => {
//     return `Index no ${index} value is ${element} and array is ${arr}`;
// })
// console.log(newArr);
// op - 
// it returns undefined
// undefined
// we can not attach some other methods like we do in map()





// que: find square roo t of each Element of array ?
// let arr = [25, 36, 49, 64, 81];
// let result = arr.map((element) => {
//     return Math.sqrt(element);
// })
// console.log(result);
// op - [ 5, 6, 7, 8, 9 ]


// que: Multiply each element by 2 and return only those elements which are greter than 10?

// let arr = [2,3,4,6,8];
// let result = arr.map((element)=>{
//     return element*2;
// }).filter((element) => {
//     return element > 10;
// })
// console.log(result);
// op - [ 12, 16 ]