"use strict"; // treat all js code as newer version

// alert (3+3) // will give error because we are using nodejs not browser

let name = "Aparna" //string
let age = 18 //number
let isLoggedIn = false //boolean
let stats; //undefined

// datatypes

// 1. number => 2 to power 53
// 2. bigint => used when the number is too big (rarely used)
// 3. string => ""
// 4. boolean => true/false
// 5. null => standalone value
// 6. undefined => value has not been assigned
// 7. symbol => unique

// 8. object


/* (typeof) is used to tell the datatype */

console.log(typeof age) // will print 'number'
console.log(typeof "Aparna") // will print 'string'
console.log(typeof null) // will print 'object'
console.log(typeof undefined) // will print 'undefined'
console.log(typeof isLoggedIn) // will print 'boolean'
console.log(typeof stats) // will print 'undefined'
console.log(typeof Number) //will print function