// Array
let myArr = [1, 2, "ram", true, Symbol("rishabh")];

let myArr2 = new Array(1, 2, 3);
// console.log(myArr2);
// console.log(myArr2.length);



// Array methods
myArr2.push(11)
// console.log(myArr2);

myArr2.pop()
// console.log(myArr2);

myArr2.unshift(9)
// console.log(myArr2);

myArr2.shift()
// console.log(myArr2);


// console.log(myArr2.includes(2));
// console.log(myArr2.indexOf(3));

const otherArray = myArr2.join();
// console.log(otherArray);
// console.log(typeof otherArray);

// slice and splice

let a1 = myArr.slice(1, 3);
console.log(myArr);
console.log(a1);


// manipulating the Array
let a2 = myArr.splice(1, 3);
console.log(myArr);
console.log(a2);


