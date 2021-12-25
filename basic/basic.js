//variables in js

//  var keyword

// data types in js
// 1: undefined
// 2: Boolean
// 3: Number
// 4: String: 
//5:BigInt
//6: Symbol







/* ----------------------------------------------------------------------------------------- */

// typeof() operator   - used to find datatype of operator

// practice

// 10 + "20"
// console.log(10 + "20");
// op - 1020
// // "Java" + "Script"
// console.log("Java" + "Script");
// op - JavaScript    (it will concatenate)
// // " "+" "
// console.log(" "+" ");
// op-(here we will get two space)
// // " " + 0
// console.log(" " + 0);
// op -  0 (here we will get space and then zero)
// // "shreyan" - "kashyap"
// console.log("shreyan" - "kashyap");
// OP- NaN
// // true + true
// console.log(true + true)  
// op- 2  (true represent 1 and false represent 0)
// // true + false
// console.log(true + false)
// op- 1
// // false - true
// console.log(false - true)
// op - -1






/* ------------------------------------------------------------------------------*/

// difference between NULL vs Undefined
// var myName = null;
// console.log(myName);
// op - Null

// Q : what if interviewer ask to tell some bug in js?
// case 1: console.log(9 - "5"); 
//         op - it will give output 4
             
// case 2:  var myName = null;
//          console.log(myName);
//          console.log(typeof(myName)); - it will give output  object (ie: it give datatype object)
         

// var itValue;
// console.log(itValue);
// op - undefined
// undefined means it's value is not assigned . it's also a datatype.

// Q : What is NaN ??
// it measn value which is not a number
// NaN is a property of the global object (it can be accessed globally)
// In other words, it is a variable in global scope
// The initial value of NaN is Not-A-Number

// when we try to substract two string it will give value NaN

// var myPhoneNumber = 98745647464;
// var myName = "shreyan kashyap";

// console.log(isNaN(myPhoneNumber)); - it will give output false
// console.log(isNaN(myName));  - it will give output true

// if(isNaN(myName)){
//     console.log("plz enter a valid phn no");  - it will give output value bcs myName is string and isNaN will give result 1
// }



// Q : Some more questions ?? 
// NaN === NaN;
// console.log(NaN === NaN); - op false
// Number.NaN === NaN
// console.log(Number.NaN === NaN);  - op false
// isNaN(NaN);
// console.log(isNaN(NaN));   - op true
// isNaN(Number.NaN);
// console.log(isNaN(Number.NaN)); - op true 
// Number.isNaN(NaN);
// console.log(Number.isNaN(NaN)); - op true





/* -------------------------------------------------------------------------------------------------*/


// operators

// var x = 5;
// var y =5;

// console.log(x==y); - op - it will give true
// console.log("Is both x and y are equal" + x==y);   - op - it will give output false

// console.log(`Is both x and y are equa : ${x==y}`); - op - it will give output true



// Q : what is difference between == and === ??

//  == (double equals only check value)
//  === (triple equals checks the data type)
//  var num1 = 5;
//  var num2 = '5';
//  console.log(num1==num2); it will give output true
//  console.log(num1===num2); it will give output false

// Q : write a prg to find leap year ?

// var year = 2020;

// if(year%4===0 || year%400===0)
// {
//     if(year%100===0)
//     {
//       console.log("it is not a leap year");
//     }
//     else{
//         console.log("leap year");        
//     }
// }




/* -------------------------------------------------------------------- */

    // |
    // |
    // |
    // |_________   OOP 'S

    // FOR
    // WHILE
    // DO WHILE


 /* -----------------------------------------------------------------------------*/   












/* -------------------------------------------------------------------- */

                        //  FUNCTIONS

// STRUCTURE TO WRITE A FUNCTION

// function functionName()
// {
//      Statement
// }


// Q : what is difference between defining a function and calling a function??

// defining a function 

// function sum(){
//     var a =10, b = 40;
//     var total = a + b;
//     console.log(total);
// }

// calling a function

// sum();

/* -------------------------------------------------------------------- */


















