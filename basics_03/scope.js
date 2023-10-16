let a=10;
const b=10;
var c=10;

if (true) {
    let a=30;
    const b=30;
    var c=30;//it is change all c because var is not follow scope and define multiple variable with same name
}
console.log(a);
console.log(b);
console.log(c);