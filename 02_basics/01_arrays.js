//arrays

const myArray = [1,2,3,4,5];

console.log(myArray[0]); //1
//elements in arrays can only be searched through indexing.
//indexing in arrays start from 0

// const myarr = new Array(7,8,9); //another way of declaring an array


myArray.push(0); //to add element in array
console.log(myArray); //[1,2,3,4,5,0]

myArray.pop(); //to remove the last element from the array
console.log(myArray); //[1,2,3,4,5]

// myArray.unshift(7); //to add element in the start of an array
// console.log(myArray); //[7,1,2,3,4,5]

// myArray.shift(); //to remove the first element from the array
// console.log(myArray); //[1,2,3,4,5]

console.log(myArray.includes(7)); //false //checks if an element exists in the array or not
console.log(myArray.indexOf(4)); //3 //will return -1 for index of elements that don't exist

// const myarr = myArray.join(); //converts array into string
// console.log(myArray); //[1,2,3,4,5]
// console.log(myarr); //1,2,3,4,5
// console.log(typeof myarr); //string
// console.log(typeof myArray); //object

/*SLICE AND SPLICE*/
console.log("A", myArray); //A [ 1, 2, 3, 4, 5 ]

const mya1 = myArray.slice(1,3); //includes the starting range, doesn't include the ending range
console.log(mya1); //[ 2, 3 ]
console.log("B", myArray); //B [ 1, 2, 3, 4, 5 ] //the original array remains the same

const mya2 = myArray.splice(1,3); //includes the starting and ending range both
console.log(mya2); //[ 2, 3, 4 ]
console.log("C", myArray); //C [ 1, 5 ] //removes the elements included in the range, from the original array
