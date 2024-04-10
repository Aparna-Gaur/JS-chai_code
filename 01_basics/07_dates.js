// Dates

let myDate = new Date();
// console.log(myDate); //2024-04-09T17:17:24.270Z
console.log(myDate.toString()); //Tue Apr 09 2024 22:50:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Tue Apr 09 2024
// console.log(myDate.toISOString()); //2024-04-09T17:20:02.255Z
// console.log(myDate.toJSON()); //2024-04-09T17:22:23.928Z
// console.log(typeof myDate); //object

// let newDate = new Date(2024, 3, 7); //2024=year //3=month //7=day
// console.log(newDate.toDateString()); //Sun Apr 07 2024 //in js, months start from 0 to 11
// let newDate = new Date(2024, 3, 7, 20, 12, 34); //20=hours //12=minutes //34=seconds
// console.log(newDate.toLocaleString()); // 4/7/2024, 8:12:34 PM

let myTimeStamp = Date.now();

console.log(myTimeStamp); //1712710353044 //in milliseconds
// console.log(newDate.getTime()); //1712500954000 //used to get precise time for time differences

// console.log(Math.floor(Date.now()/1000)); //1712710761 //in order to convert it to seconds


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1); //4 //(+1) to normalize the month because in js months usually start from 0.

//To customize date in a desired format
console.log(newDate.toLocaleString('default', {
    minute: "2-digit",
    weekday: "long"
})); //Wednesday, 43