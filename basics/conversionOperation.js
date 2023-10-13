let myStatus = 1;
let name = 2;
console.table([typeof Number(myStatus), typeof Number(BigInt(myStatus)), typeof Number("rishabh"), typeof Number(true), typeof (Symbol(myStatus)), typeof Number(null), typeof Number(undefined)])
console.table([typeof String(myStatus), typeof String(BigInt(myStatus)), typeof String("rishabh"), typeof String(true), typeof String(Symbol("rishabh")), typeof String(null), typeof String(undefined)])
console.table([typeof Boolean(myStatus), typeof Boolean(BigInt(myStatus)), typeof Boolean("rishabh"), typeof Boolean(true), typeof Boolean(Symbol("rishabh")), typeof Boolean(null), typeof Boolean(undefined)])

// operations
console.log(1 + 2)