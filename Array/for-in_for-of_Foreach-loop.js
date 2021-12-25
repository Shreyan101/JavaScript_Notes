 // Array in javascript 

//  var friend1 = 'shreyan';
//  var friend2 = 'vishal';
//  var friend3 = 'gopal';


// -> when we use var, we can store only one value at a time
// -> when we feel like storing multiple values in one variable then
//    instead of var, we will use an array

// -> In javascript we have an array class and
//    arrays are the prototype of this class.


// var myfriends = ['shreyan','vishal','gopal'];

// usually in other prgm lang we can only store similar type of variable in array 
// but in javascript we can store different values

// var myfriends = ['shreyan',21,male,'vishal',27,male,'gopal',20,male];

// to find the length of array we have (To find no of elements)
// var myfriends = ['shreyan',21,'male','vishal',27,'gopal',20];

// console.log(myfriends.length);

// for(var i=0;i<myfriends.length;i++)
// {
//     console.log(myfriends[i]);
// }



// after ES 6 we have for ..in and for ..of loop too


// For in loop gives index of elements
// var myfriends = ['shreyan',21,'male','vishal',27,'gopal',20];
// for(let elements in myfriends){
//     console.log(elements);
// }

// output ->
// 0
// 1
// 2
// 3
// 4
// 5
// 6

// For of loop gives value of elements
// var myfriends = ['shreyan',21,'male','vishal',27,'gopal',20];
// for(let elements of myfriends){
//     console.log(elements);
// }

// output ->
// shreyan
// 21
// male
// vishal
// 27
// gopal
// 20


// Foreach() function
// var myfriends = ['shreyan',21,'male','vishal',27,'gopal',20];

// myfriends.forEach(function(element, index, array){
// console.log(element);
// console.log(index);
// console.log(array);
// });

// op - > 
// shreyan
// 0
// [ 'shreyan', 21, 'male', 'vishal', 27, 'gopal', 20 ]
// 21
// 1
// [ 'shreyan', 21, 'male', 'vishal', 27, 'gopal', 20 ]
// male
// 2
// [ 'shreyan', 21, 'male', 'vishal', 27, 'gopal', 20 ]
// vishal
// 3
// [ 'shreyan', 21, 'male', 'vishal', 27, 'gopal', 20 ]
// 27
// 4
// [ 'shreyan', 21, 'male', 'vishal', 27, 'gopal', 20 ]
// gopal
// 5
// [ 'shreyan', 21, 'male', 'vishal', 27, 'gopal', 20 ]
// 20
// 6
// [ 'shreyan', 21, 'male', 'vishal', 27, 'gopal', 20 ]

// IMPORTANT 
// this argument doesn't support fat arrow function

// ALTERNATIVE -> 

// myfriends.forEach((element, index, array) => {
// console.log(element);
// console.log(index);
// console.log(array);
// });






