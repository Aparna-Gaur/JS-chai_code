const score = 1234;
console.log(score); //1234

const balance = new Number(321.67); //another way of declaring number
console.log(balance); //[Number: 321.67]

//toFixed(count) //used to set decimal place
console.log(balance.toFixed(2)); //321.67
console.log(balance.toFixed(0)); //322

// //toPricision(count) //used to convert the digit into desired precise value
// console.log(balance.toPrecision(3)); //322
// console.log(balance.toPrecision(4)); //321.7
// console.log(balance.toPrecision(2)); //3.2e+2


// //toLocaleString() //used to show digit in US numbering method or Indian numbering method
// const num = 10345000;
// console.log(num.toLocaleString()); //10,345,000 //US
// console.log(num.toLocaleString('en-IN')); //1,03,45,000 //Indian


//***********************MATHS***************************//

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-7)); //7 //converts number to positive
console.log(Math.round(4.6)); //5 //rounds off the number
// console.log(Math.ceil(9.3)); //10 //rounds off to the next greater number
console.log(Math.floor(10.9)); //10 //rounds off to the previous smaller number
// console.log(Math.min(3,8,4)); //3 //gives the smallest number in a series
// console.log(Math.max(45,2,34)); //45 //gives the largest number in a series


//math.random() //generates random number from 0(inclusive) to 1(exclusive)
console.log(Math.random()); //0.130896
console.log((Math.random()*10) + 1); //1.058602 //(*10) to ensure number is greater than 0. (+1) to ensure minimum number is 1

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
//math.floor() to ensure the outcome is not in decimal values
//(max-min) to see the range of the possible outcomes.
//(+1) to ensure the maximum value is included as well in case the outcome is 1 less than max because of floor()
//(+ min) to ensure the minimum value is included in case the outcome of (max-min+1) results in 0 because of floor()

