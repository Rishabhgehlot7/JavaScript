// Date

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof (myDate));

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2023, 1, 23, 5, 30, 29)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-05")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("05-08-2008")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp / 1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})

