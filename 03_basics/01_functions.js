// function AddTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// AddTwoNumbers(4,3)

function AddTwoNumbers(number1, number2){ //(parameters)
    result = number1 + number2
    return result
}
AddTwoNumbers(7,7) //(arguments)
console.log(`The result is ${result}`);


// function loggedIn(username){
//     return `${username} just logged in.`
// }
// console.log(loggedIn("Aparna")); //Aparna just logged in.
// console.log(loggedIn()); //undefined just logged in.

//in case user returns empty function
function loggedIn(username){ //!username = not username
    if(!username){
        console.log("Please enter a username");
        return
    }
    
    return `${username} just logged in.`
}
console.log(loggedIn()); //Print enter a username //also prints 'undefined'
console.log(loggedIn("Aparna")); //Aparna just logged in.


//to prevent function from returning empty or undefined values
// function loggedIn(username = "Gaur"){
//     return `${username} just logged in.`
// }
// console.log(loggedIn("Aparna")); //Aparna just logged in.
// console.log(loggedIn()); //Gaur just logged in. //empty function will return pre-defined values


// //in case of single item
// function cartItems(num){
//     return num;
// }
// console.log(cartItems(30)); //30
// console.log(cartItems(23,34)); //23 //the rest items are not shown

//in case of multiple items
//rest operator
function cartItems(...num){ //(...)= rest operator
    return num;
}
console.log(cartItems(30, 24, 45)); //[ 30, 24, 45 ]


const user = {
    name: "Aparna",
    price: 299
}

function userinfo(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}.`);
}
userinfo(user); //Username is Aparna and price is 299.
//OR
userinfo({
    name: "aparna",
    price: 134
}) //Username is aparna and price is 134.


const myArray = [23,45,699];

function returnarray(anyarray){
    console.log(anyarray[1]);
}
returnarray(myArray); //45
//OR
returnarray([20,30,40]) //30