const accountId = 1223
// const values do not change
let accountEmail = "aparna@google.com"
var accountPassword = "2024"
/*avoid using 'var' because of block scope issues and functional scope issues. Prefer using 'let' */

accountCity = "Bahadurgarh"
/* in js you have the choice to not use 'let', 'const' or 'var' declaring a variable but it is not recommended */
let accountState;
//empty variable will print 'undefined'

accountEmail = "ag@google.com"
accountPassword = "2023"
accountCity = "Jaipur"

console.log(accountId);
// .log to print one variable

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
// .table to print multiple variables in the form of a table