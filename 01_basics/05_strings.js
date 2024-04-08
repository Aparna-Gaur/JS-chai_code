// const myname = "aparna";
// const value = 7;

// console.log(myname + " gaur " + value); //aparna gaur 7
// console.log(`hello my name is ${myname} and my number is ${value}`);
// //hello my name is aparna and my number is 7

const gamename = new String('aparna gaur'); //another way of declaring a string

console.log(gamename); // [String: 'aparna gaur']

// console.log(gamename[0]); //a
// console.log(gamename.__proto__); //[String: '']
// console.log(gamename.length); //11
// console.log(gamename.toUpperCase()); //APARNA GAUR
// console.log(gamename.charAt(7)); //g
// console.log(gamename.charAt(6)); // will show blank
// console.log(gamename.indexOf('a')); //0


//string.slice() //slice(start, end)
// console.log(gamename.slice(0,7)); //aparna
// console.log(gamename.slice(7)); //gaur
// console.log(gamename.slice(-4)); //gaur
// console.log(gamename.slice(-11,-5)); //aparna


//string.substring() //substring(start, end)
//substring is similar to slice, but in substring any value less than 0 is considered as 0
console.log(gamename.substring(0,7)); //aparna
console.log(gamename.substring(-4)); //aparna gaur //-4 is considered as 0

//string.substr() //substr(start, length)
//substr is similar to slice, but in substr the second parameter is length of the string
console.log(gamename.substr(2,4)); //arna


//concat() //joins two or more strings
let str1 = "Hello";
let str2 = "World!"
let str3 = str1.concat(" ", str2);
console.log(str3); //Hello World!

let str4 = "hello".concat(" ", "world");
console.log(str4); //hello world


// //trim() //removes whitespaces from start and end of string
// let text = "    Aparna   ";
// console.log(text.trim()); //Aparna
// console.log(text.trimStart()); //removes whitespace from start of string
// console.log(text.trimEnd()); //removes whitespace from end of the string
// //trimStart() is also called trimLeft() 
// //trimEnd() is also called trimRight()

//Padding (length, character to add in the padding) //adds padding to a string in order to increase its length
//padStart() //adds padding in the start of the string to reach a desired length
let text1 = "7";
console.log(text1.padStart(3, "0")); //07 //adds '0' in the start of the string until its length reaches 3

//padEnd() //adds padding in the end of the string to reach a desired length
let text2 = "7";
console.log(text2.padEnd(4, "a")); //7aaa //adds 'a' in the end of the string until its length reaches 4


//string.repeat(count) //repeats a string to desired number of times
let text3 = "Aparna Gaur ";
console.log(text3.repeat(2)); //Aparna Gaur Aparna Gaur


//string.replace(val1, val2) //replaces a val1 in a string with val2
let web = "https//aparna%20gaur.com";
console.log(web.replace("%20", "-")); //https//aparna-gaur.com
//replace() is case-sensitive and only replaces the first said value


//include(val) //checks if a particular val is there in the string or not
console.log(web.includes("aparna")); //true
console.log(web.includes("url")); //false
