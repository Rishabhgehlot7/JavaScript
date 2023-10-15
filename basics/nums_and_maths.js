// Number
const number1 = 100;
console.log(number1);

const number2 = new Number(100);
console.log(number2);

console.log(number1.toString());
console.log(number1.toFixed(2));

const otherNumber = 123.9698;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

// Math
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.65));
console.log(Math.ceil(4.12));
console.log(Math.floor(4.92));
console.log(Math.min(1, 5, 9,));
console.log(Math.max(1, 5, 9,));


console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
