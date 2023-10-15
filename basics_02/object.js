// singleton

// Object literals
let key1 = Symbol("key1");
const JsUser = {
    name: "rishabh",
    age: 20,
    [key1]: "keyValue",//let key as a symbol
    location: "jodhpur",
    email: "rishabh@gmail.com",
    isLoggedIn: false,
    lastLoggingDays: ["monday", "wednesday"]
}
// access using this syntax
JsUser.email = "rishabh@google.com"
console.log(JsUser);
// Object.freeze(JsUser);//freeze the object and do not manipulate this object

// access using this syntax
JsUser["email"] = "rishabh@google.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log(`hello,${this.name}`);
}
console.log(JsUser.greeting());