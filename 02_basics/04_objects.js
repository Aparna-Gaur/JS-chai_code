//objects constructors 

//Two ways to declare an object
const info = {} //singleton
//const info =  new Object() //non-singleton

info.name = "Aparna";
info.email = "aparna@dotcom";
info.age = 19;
info.isLoggedIn = false;

// console.log(info); //{ name: 'Aparna', email: 'aparna@dotcom', age: 19 }

// //nested object
// const regular_user = {
//     email: "gaur@dotcom",
//     name: {
//         fullname: {
//             firstname: "Aparna",
//             lastname: "Gaur"
//         }
//     },
//     userid: "123"
// }
// console.log(regular_user.name.fullname.lastname); //Gaur

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};


const obj4 =  Object.assign({}, obj1, obj2, obj3); //to join two or more objects
console.log(obj4); //{'1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f'}

const obj5 = {...obj1, ...obj2}; //another method to join objects
console.log(obj5); //{'1': 'a', '2': 'b', '3': 'c', '4': 'd'}


// //array of objects //databases provide info in the form of array of objects
// const user = [
//     {
//         id: 1,
//         name: "a"
//     },
//     {
//         id: 2,
//         name: "b"
//     },
//     {
//         id: 3,
//         name: "c"
//     }
// ]
// console.log(user[1].name); //b

// console.log(info);

//in databases objects are in the form of array
console.log(Object.keys(info)); //[ 'name', 'email', 'age', 'isLoggedIn' ]
console.log(Object.values(info)); //[ 'Aparna', 'aparna@dotcom', 19, false ]

console.log(Object.entries(info)); //keys and values in the form of array
/* [
    [ 'name', 'Aparna' ],
    [ 'email', 'aparna@dotcom' ],
    [ 'age', 19 ],
    [ 'isLoggedIn', false ]
  ] */

console.log(Object.hasOwnProperty('name')); //true //to check if a key exists in an object or not

/**************************************************************/ 

//destructuring
const course = {
    coursename: "js in hindi",
    price:  "999",
    course_instructor: "Hitesh Sir"
}

const {course_instructor: instructor} = course;
//there won't be any need to use 'course.course_instructor' again and again
//can also alias key names to another for better and clean code //optional
console.log(instructor); //Hitesh Sir

const {coursename} = course;
console.log(coursename); //js in hindi