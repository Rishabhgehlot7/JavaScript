const object = {
    name: "rishabh",
    age: 20,
    welcomeMessage: function () {
        console.log(`${this.name}, welocme to rishabhKiKaksha`);
    }
}
object.welcomeMessage()

console.log(this);

function myFun() {
    console.log(this);
}
myFun()


// arrow function

const myFun1 = () => {
    console.log("hello myfun1");
}
myFun1()

// implicite arrow function 
const myFun2 = () => console.log("hello myfun2");
myFun2()

let sum = 0
const myArr = [1, 2, 3]
myArr.forEach((item) => {
    sum += item;
})
console.log(sum);