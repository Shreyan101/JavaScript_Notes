// Array.prototype.splice()
// Adds or remove elements from an array


// const names = ['a','b','c','d'];

// adding name at the end of array
// const addName = names.splice(4,0,'newName');
// console.log(names);
// return value of splice mrthod
// console.log(addName);
// op - empty array []



// update using splice
// names.splice(1,1,'B');
// console.log(names);

// Alternate method
// const names = ['a','b','c','d'];
// const indexOfMonth = names.indexOf('c');
// if(indexOfMonth!=-1)
// {
//     const updateNames = names.splice(indexOfMonth,1,'C');
//     console.log(names);
// }else{
//     console.log('No such data found');
// }
//  op  -  [ 'a', 'b', 'C', 'd' ]



// Delete 
// const names = ['a','b','c','d'];
// const indexOfMonth = names.indexOf('c');
// if(indexOfMonth!=-1)
// {
//     const updateNames = names.splice(indexOfMonth,1);
//     console.log(names);
// }else{
//     console.log('No such data found');
// }

// op  -  [ 'a', 'b', 'd' ]



// const names = ['a','b','c','d'];
// const indexOfMonth = names.indexOf('c');
// if(indexOfMonth!=-1)
// {
//     const updateNames = names.splice(indexOfMonth,Infinity);
//     console.log(names);
// }else{
//     console.log('No such data found');
// }

// op - [ 'a', 'b' ]




// const names = ['a','b','c','d'];
// const indexOfMonth = names.indexOf('b');
// if(indexOfMonth!=-1)
// {
//     const updateNames = names.splice(indexOfMonth,2);
//     console.log(names);
// }else{
//     console.log('No such data found');
// }


// op - [ 'a', 'd' ]

