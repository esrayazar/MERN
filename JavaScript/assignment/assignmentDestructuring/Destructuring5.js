const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// this code print as below
// esrayazar@Esras-MacBook-Pro assignmentDestructuring % node "/Users/esrayazar/Documents/codingdojo/MERN/JavaScript/assignment/assignmentDestructuring/Destructuring5.js"
// value
// [ 1, 5, 1, 8, 3, 3 ]
// 1
// 5