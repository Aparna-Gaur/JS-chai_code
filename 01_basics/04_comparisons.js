console.log("02" > 1) //true
console.log(2 > 1) //true

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

/* Equality check (==) and comparisons check (<,>,<=,>=) work differently
comparisons convert null into number, treating it as number */


console.log("02" == 2); //true //converts string to number and then checks equality
console.log("02" === 2); //false //doesn't convert, checks equality of string to number

/* Equality check (==) : checks the values after type-coersion
Strict equality check (===) : checks the values without type-coersion */

// Strict check is usually recommended when checking equality of different data-types