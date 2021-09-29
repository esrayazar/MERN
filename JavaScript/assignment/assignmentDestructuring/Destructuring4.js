const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);


// this code print as below
// esrayazar@Esras-MacBook-Pro assignmentDestructuring % node "/Users/esrayazar/Documents/codingdojo/MERN/JavaScript/assignment/assignmentDestructuring/Destructuring4.js"
// false
// true