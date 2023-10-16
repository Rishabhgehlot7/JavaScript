let a = 10;
const b = 10;
var c = 10;

if (true) {
    let a = 30;
    const b = 30;
    var c = 30;//it is change all c because var is not follow scope and define multiple variable with same name
}
console.log(a);
console.log(b);
console.log(c);

function name(params) {
    const myVar = "rishabh"
    console.log(params);
    function name1() {
        const myVar2 = "ravi";
        console.log(myVar);
    }
    // console.log(myVar2); 
    name1()
}
name("rahul")

if (true) {
    const myVar = "rishabh"
    if (true) {
        const myVar2 = "ravi";
        console.log(myVar);
    }
    // console.log(myVar2); 
    // name1()
}

// myFun() //Cannot access 'myFun' before initialization
const myFun = function () {
    console.log("myFun is running");
}
myFun()


myFun1()
function myFun1() {
    console.log("myFun1 is running");
}
