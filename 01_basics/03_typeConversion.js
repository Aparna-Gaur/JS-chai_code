let score = "33"

console.log(score) //33
console.log(typeof score) //string

let isNumber = Number(score) 
console.log(typeof isNumber) //number
console.log(isNumber) //33



// let score = "33abc"

// console.log(score) //33abc
// console.log(typeof score) //string

// let isNumber = Number(score) 
// console.log(typeof isNumber) //number
// console.log(isNumber) //NaN (Not a Number)



// let score = true

// console.log(score) //true
// console.log(typeof score) //boolean

// let isNumber = Number(score) 
// console.log(typeof isNumber) //number
// console.log(isNumber) //1 (0 for false, 1 for true)



// let score = 33

// console.log(score) //33
// console.log(typeof score) //number

// let isNumber = Boolean(score) 
// console.log(typeof isNumber) //boolean
// console.log(isNumber) //true (false for 0, true for rest)


/*********************************Operations*****************************************/

// let gameCounter = 100
// let y = ++gameCounter
// console.log(gameCounter) //101
// console.log(y) //101

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// let value = 3
// let negvalue = -value
// console.log(-value) //-3
// console.log(negvalue) //-3

// console.log(true) //true
// console.log(false) //false
// console.log(+true) //1
// console.log(+false) //0
// console.log(+"") //0
// console.log(-true) //-1
// console.log(-false) //-0
// console.log("") //blank


// console.log(1 + 2) //3

// console.log("1" + "2") //12

// console.log("1 + 2") //1 + 2

// console.log(1 + "2") //12

// console.log("1" + 2) //12

// console.log("1" + 2 + 2) //122

// console.log(1 + 2 + "2") //32

// console.log(1 + "2" + "2") //122

// console.log(1 + "2" + 2) //122

// console.log("1" + 2 + "2") //122

// console.log("1" + "2" + 2) //122