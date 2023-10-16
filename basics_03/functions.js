function hello() {
    console.log("hello world!");// function defination
}


hello()//function call

function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(sumTwoNumbers(1, 3));

// ... this dots is called rest and spread oprator
function multipleValueChangeIntoArray(...num) {
    return num;
}
console.log(multipleValueChangeIntoArray(1, 3, 2, 44, 55, 66, 22));

let myObj = {
    name: "rishabh",
    age: 20,
}
function ObjectPassAsAParameters(itIsObject) {
    console.log(`Name is ${itIsObject.name} and age is ${itIsObject.age} using Object`);
}
ObjectPassAsAParameters(myObj)

let myArray = ["Rishabh", 20]
function ArrayPassAsAParameters(myArr) {
    console.log(`Name is ${myArr[0]} and age is ${myArr[1]} using array `);
}

ArrayPassAsAParameters(myArray)