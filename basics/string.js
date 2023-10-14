const name = "rishabh";
const rollno = 123;

console.log(`my name is ${name} and my roll number is ${rollno}`);

// second way to define a String
const myString = new String("mystring");

console.log(myString.__proto__);
console.log(myString[0]);

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.charAt(2));
console.log(myString.indexOf('y'));


const firstvalue = myString.substring(0, 4);
console.log(firstvalue);

const secondValue = myString.slice(-1, 4);
console.log(secondValue);


const newStringOne = "             rishabh                ";
console.log(newStringOne.trim())
console.log(newStringOne)


const url = "https://rishabh.com/rishabh%20gehlot"
console.log(url.replace('%20', '-'))

console.log(url.includes("rishabh"));

const myVariable = "hello-rishabh-gehlot";
console.log(myVariable.split('-'));