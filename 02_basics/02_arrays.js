const num1 = [1,2,3];
const num2 = [4,5,6];

// // num1.push(num2);
// // console.log(num1); //[1,2,3,[4,5,6]]

// //concat() //can only add two arrays
// const num3 = num1.concat(num2);
// console.log(num3); //[1,2,3,4,5,6]

//spread operator 
//preferred over concat() because in this you can add multiple arrays (more than two)
const num4 = [...num1, ...num2];
console.log(num4); //[1,2,3,4,5,6]


//flat() //concats all subarrays in a single array
const myarr = [1,2,3, [4,5], [6,7,[8,9]]]; //too many arrays in a single array
console.log(myarr.flat(Infinity)); //[1,2,3,4,5,6,7,8,9] //infinity= concats all subarrays

console.log(Array.isArray('Aparna')); //false //used to check array or not

console.log(Array.from('Aparna')); //['A','p','a','r','n','a']
//used to convert into array

console.log(Array.from({num: '123'})); //[]
//empty array because we need to specify if we want the array of keys or values


const score1 = 10;
const score2 = 20;
const score3 = 30;

console.log(Array.of(score1, score2, score3)); //[10, 20, 30]