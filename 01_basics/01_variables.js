const account_Id = 1
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"

// prefer not use var because of issue in block scope and functional scope

accountCity= "Jaipur" // variable declaration like accountCity="Jaipur" is not reccomended

let accountState // it give undefined

// account_Id=2  //TypeError: Assignment to constant variable

console.log(account_Id)

accountEmail = "akash@google.com"
accountPassword = "67890"
accountCity = "Delhi"
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(typeof accountCity) //string
console.log(typeof accountState); //undefined

//console.table gives output in tabular format.It is useful to print more than one variable at once
console.table([ account_Id, accountEmail, accountPassword, accountCity, accountState ])

//const= constant reference , not constant value
//const prevents reassignments but arrays/objects remain mutable as they are pass by reference
const x = 10;
// x = 20; //TypeError: Assignment to constant variable


//pass by reference
const user = { name: "Alice", age: 23 };
// You can modify properties
user.age =32 ;
user.city = "Delhi";

console.log(user); // { name: "Alice", age: 32, city: "Delhi" }

//You cannot reassign the variable itself
// user = { name: "Bob" }; //TypeError: Assignment to constant variable


