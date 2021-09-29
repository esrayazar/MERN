const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// since name is not defined it will throw following error
// console.log(name);
//             ^

// ReferenceError: name is not defined
//     at Object.<anonymous> (/Users/esrayazar/Documents/codingdojo/MERN/JavaScript/assignment/assignmentDestructuring/Destructuring2.js:8:13)
