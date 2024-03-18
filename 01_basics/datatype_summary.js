//js is dynamic language
//data-type summary

// Data-types are of 2 types- Primitive and Reference

//Primitive data-types 
//7 types- Number, String, BigInt, null, undefined, boolean, symbol

//Reference (Non-Primitive) data-types
//Array, Objects, Functions


//Symbols
let ID = Symbol('123')
let accountID = Symbol('123')

console.log(ID); //Symbol(123)
console.log(accountID); //Symbol(123)
console.log(ID === accountID); //false
//Symbol makes the value unique