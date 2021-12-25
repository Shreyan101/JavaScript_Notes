/* ---------------------------------------------------------------------  */


// Find a string in an string
// String.prototype.indexOf( searchValue [, fromIndex])
// The indexOf() method returns the index of ( the position of ) the first
// occurence of a specified text in a string


// const myBioData = 'I am Shreyan Kashyap';
// console.log(myBioData.indexOf("Shreyan"));
// output -> 5


// indexOf() method is case sensitive ie: here s is small
// console.log(myBioData.indexOf("shreyan"));
// output -> -1


// The indexOf() method returns the index of ( the position of) the first 
// occurence of a specified text in a string

// const myName = 'I am Shreyan KaShyap';
// console.log(myName.indexOf("S",6 ));  // it will start counting from index 6th
// op -> 15

/* ------------------------------------------------------------------------ */

// String.prototype.lastIndexOf(searchValue [, fromIndex])
// Returns the index within the calling String object of the
// last occurence of searchValue, or -1 if not found.

// const myName = 'I am Shreyan KaShyap';
// console.log(myName.lastIndexOf("S", 7)); // it start searching from back ie: here from index 7 from last
// op -> 5
