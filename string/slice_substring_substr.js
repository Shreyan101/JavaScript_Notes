// Extracting String Parts

// There are 3 methods for extracting a part of a string:

 // slice(start, end)
 // substring(start, end)
 // substr(start, length)

 // -> 1 : The slice() Method
 // slice() extracts a part of a string and returns the extracted part
 // in a new string.

 // The method takes 2 parameters: the start position,
 // and the end position (end not included).

 // Example- 1
//  var str = "Apple, Bananaa, Kiwi";
//  let res = str.slice(0,4);
//  console.log(res);
//  op-> Appl


// Example - 2
// var str = "Apple, Bananaa, Kiwi, mango";
// let res = str.slice(7,-2);
// console.log(res);
// op -> Bananaa, Kiwi, man   * it will start from 7th index and leave 2 last position value which is go


// Practice Problem
// Challenge Time:
// Display only 280 characters of a string like the one used in twitter?
// let myTweets = " asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdffasdff asdff asdffasdff v v asdff asdff asdff asdff v asdff asdff asdff asdff v asdff asdff v asdff asdff asdff asdff asdff asdff v asdff asdffasdff asdff asdff asdffasdffasdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff";
// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// op ->  asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff asdff 
// asdff asdff asdffasdff asdff asdffasdff v v asdff asdff asdff asdff v asdff asdff asdff asdff v asdff asdff v asdff asdff asdff asdff asdff asdff 
// v asdff asdffasdff asdff asdff asdffasdffasdff asdff asdff as

// console.log(myActualTweet.length);
// op-> 280



/* ----------------------------------------------  */

// The substring() Method
// substring() is similar to slice()
// the difference is that substring()  cannot accept -ve indexes.
// if we give -ve value then the characters are counted from 0th pos

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8, -2);
// console.log(res);
// op - > Apple, B



/*-----------------------------------------------------------*/


// The substr() Method
// substr() is similar to slice().

// The difference is that the second parameter specifies
// the length of the extracted part.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substr(7,-2); // it will nt give any output
// let res = str.substr(-4);  // op - > Kiwi
// console.log(res);





/*----------------------------------------------------------*/