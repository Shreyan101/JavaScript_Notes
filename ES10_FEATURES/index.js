// converting 2d and 3d array into one dimensionsal array

// const arr = [
// [1,2],
// [3,4],
// [5,6],
// [7,8,[9,10]]  
// ];

// console.log(arr.flat());  -> By default it flat only uto one level
// op -> [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]




// we have to pass parameter to make array flat upto certain level
// const arr = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8,[9,10]]  
//     ];
    
// console.log(arr.flat(2)); 
// op -> 
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10 
// ]


// if we donot kw the exact level we can put infinity there
// const arr = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8,[9,10,[11,12,[13,14]]]]  
//     ];
    
// console.log(arr.flat(Infinity)); 

// op -> 
// [
//     1,  2, 3,  4,  5,  6,
//     7,  8, 9, 10, 11, 12,
//    13, 14
// ]


// Object.fromEntries(arrObj);

// const person = { name: 'shreyan', age: 21 };

// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));

// op ->
// { name: 'shreyan', age: 21 }


