const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);


// this code will print as below
// esrayazar@Esras-MacBook-Pro assignmentDestructuring % node "/Users/esrayazar/Documents/codingdojo/MERN/JavaScript/assignment/assignmentDestructuring/Destructuring3.js"
// 12345
// undefined