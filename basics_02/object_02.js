const obj1 = new Object();//singleton object
obj1.name = "rishabh";
obj1.age = 20;
obj1.location = "jodhpur";
console.log(obj1);

const obj12 = { a: 1, b: 2, c: 3 };
// const obj3 = { obj1, obj12 }; it is not working for join


// const obj3 = Object.assign({}, obj1, obj12);
// console.log(obj3);

const obj3 = { ...obj1, ...obj12 };
console.log(obj3);

let ArrayObject = [
    {
        id: 1,
        name: "rishabh Gehlot"
    }, {
        id: 2,
        name: "ravi"
    }, {
        id: 3,
        name: "rahul"
    }, {
        id: 4,
        name: "reechik"
    },
]
console.log(ArrayObject[0].id);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty("location"));

// de structureing of object
const { name } = obj1;
console.log(name);
const { location: area } = obj1;
console.log(area);