// javascript have two types of memory 
// 1. stack ( for primitive dataTypes)
// 2. heap ( for non-primitive dataTypes)

// 1. stack ( for primitive dataTypes)
let employeeOne = "rishabh";
// value is pass as a copy 
let employeeTwo = employeeOne;
employeeTwo = "ravi";
console.log(employeeOne);
console.log(employeeTwo);


// 2. heap ( for non-primitive dataTypes)

let studentOne = {
    name: "rishabh",
    email: "rishabh@gmail.com"
}

// value pass a reference 
let studentTwo = studentOne;
studentTwo.email = "ravi@gmail.com";

console.log(studentOne);
console.log(studentTwo);