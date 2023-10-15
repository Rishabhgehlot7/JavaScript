let marval_heros = ["spiderman", "ironman", "thor"];
let dc_heros = ["batman", "superman", "spark"];

// marval_heros.push(dc_heros);
// console.log(marval_heros);

// let all_heros = marval_heros.concat(dc_heros);
// console.log(all_heros);

// let all_new_heros = [...marval_heros, ...dc_heros];
// console.log(all_new_heros);

let Array_another = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
let real_array = Array_another.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("rishabh"));
console.log(Array.from("rishabh"));
console.log(Array.from({ name: "rishabh" }));// return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
