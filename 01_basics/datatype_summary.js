//js is dynamic language
//data-type summary

// Data-types are of 2 types- Primitive and Reference

//Primitive data-types 
//7 types- Number, String, BigInt, null, undefined, boolean, symbol

//Reference (Non-Primitive) data-types
//Array, Objects, Functions


//Symbols
let ID = Symbol('123')
let accountID = Symbol('123')

console.log(ID); //Symbol(123)
console.log(accountID); //Symbol(123)
console.log(ID === accountID); //false
//Symbol makes the value unique



/**********************************************************************/
/**********************************************************************/

//Stack and Heap Memory

//Stack (for Primitive Type) & Heap (for Non-Primitive type)


//Stack always makes a copy of the values. Any change seen, is in the copy not the original

let Name = "Aparna"
let myname = Name

myname = "Aparna Gaur"

console.log(myname) //Aparna Gaur
console.log(Name) //Aparna
/* changes made in myname did not change value of Name
   even though myname = Name
   This is because it is Stack. (myname) is equal to a copy of (Name) not the original
*/


//Heap gives a reference to the original value. Any changes sen, will be made to the original

let mail = {
    email: "aparna@dotcom"
}

let myMail = mail;

myMail.email = "gaur@dotcom"

console.log(mail.email); //gaur@dotcom
console.log(myMail.email); //gaur@dotcom
/* changes made in (myMail) also changed the value in (mail)
This is because it is a heap. (mail) and (myMail) both reference each each other.
Changes made in one variable will also change the value in the other variable
*/