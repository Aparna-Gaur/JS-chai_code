//objects literals

const Sym = Symbol("xyz"); //first define the symbol and then use it as a key

const myObj = {
    name: 'Aparna',
    'full name': 'Aparna Gaur', //string type key
    age: 19,
    [Sym]: 'abc', //the way to declare symbol as a key
    email: "aparna@mail.com",
    isLoggedIn: false,
    activeDays: ['Monday', 'Friday']
}

// console.log(myObj);

// console.log(myObj.name); //to print a key-value from an object

// console.log(myObj['name']); //square notation method //another way to print a key-value from an object
// //the only way to print 'symbol' keys or string-type keys

// console.log(myObj["full name"]); //Aparna Gaur
// // console.log(myObj.full name); //will give error

console.log(myObj[Sym]); //abc //the correct way to print symbol keys
// console.log(myObj.Sym); //will show 'undefined'

myObj.name = "Aparna Gaur"; //to change key values in objects
console.log(myObj["name"]); //Aparna Gaur //changed from 'Aparna' to 'Aparna Gaur'


// Object.freeze(myObj); //to prevent any changes in object
// myObj.email = "gaur@dotcom";
// console.log(myObj["email"]); //aparna@mail.com //no changes made


//function in objects
myObj.hello = function(){
    console.log('Hello user');
}
console.log(myObj.hello()); //Hello user //also prints 'undefined'

myObj.hello_name = function(){
    console.log(`Hello ${this.name}`); //to implement function with an object key
}
console.log(myObj.hello_name()); //Hello Aparna Gaur //also prints 'undefined'