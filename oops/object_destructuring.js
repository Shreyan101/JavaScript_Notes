// Object Destructuring

// const myBioData = {
//     myFname : 'Shreyan',
//     myLname : 'Kashyap',
//     myAge : 21
// }
// let age = myBioData.myAge;
// let myFname = myBioData.myFname;
// console.log(age);
// console.log(myFname);
// op -> 
// 21
// Shreyan



// const myBioData = {
//     myFname : 'Shreyan',
//     myLname : 'Kashyap',
//     myAge : 21
// }
// let {myFname,myLname,myAge, myDegree="MS"} = myBioData;
// console.log(myAge);
// op -> 21



// OBJECT PROPERTIES

// -> WE CAN NOW USE dYNAMIC PROPERTIRS

// let myName = "shreyan";
// const myBio = {
//     [myName] : "hello hw are u?",
//     [20 + 1] : "is my age"
// }
// console.log(myBio);
// op -> { '21': 'is my age', shreyan: 'hello hw are u?' }



// no need to write key and value, if both are same
// let myName = "shreyan kashyap";
// let myAge = 21;
// const myBio = {myName,myAge};
// console.log(myBio);
// op -> { myName: 'shreyan kashyap', myAge: 21 }

