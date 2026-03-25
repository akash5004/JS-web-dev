let now=new Date()
console.log(now)
console.log(typeof now); //object
console.log(now.toString())
console.log(now.toDateString());
console.log(now.toLocaleString());

console.log("---------");



//ways to create dates

// let myCreatedDate=new Date(2023, 0,15)
let myCreatedDate= new Date(2023,0,23,5,3)
// let myCreatedDate =new Date("2023-01-15")
// let myCreatedDate=new Date("01-15-2023")
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.getTime());


let myTimeStamp = Date.now()  //Date.now() → gives current timestamp in milliseconds.
console.log(myTimeStamp);   //→ Current time in milliseconds since Jan 1, 1970 (Unix Epoch)

console.log(Math.floor(myTimeStamp/1000));
// → Current time in seconds (useful for backend, databases, JWT, etc.)


// ---------------- Extracting Parts of Date ----------------

let newDate = new Date()
console.log(newDate)
// Example: 2025-09-13T04:25:45.000Z

console.log(newDate.getMonth() + 1)
// getMonth() → returns 0-11, so +1 gives 1-12
console.log(newDate.getDay())
// getDay() → returns 0-6 (Sunday = 0, Monday = 1, ... Saturday = 6)

// You can customize how the date/time is displayed:

console.log(newDate.toLocaleString('default', {
    weekday: "long", // Full weekday name → "Saturday"
    month:"long"
    // You can also add options like year, month, day, hour,timezone, etc.
}))








