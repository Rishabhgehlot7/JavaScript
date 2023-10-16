// Immediately Invoked Function Expression

(function hello() {
    console.log("hello");
})();

// always use semicolor; in this IIFE function 
(() => {
    console.log("world");
})();