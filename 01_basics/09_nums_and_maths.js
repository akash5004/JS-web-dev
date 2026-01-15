// Example 1: Creating numbers
const score = 400
// console.log(score); // 400 (primitive number)

const balance = new Number(100) //The new keyword explicitly calls the Number constructor to create an object.
console.log(balance);
console.log(typeof balance);
//new Number(100) creates a Number object (not primitive).
//Most of the time you’ll use primitive numbers, but the object form lets you access more methods.

// Convert to string

// console.log(balance.toString().length); //"100" → length is 3

// Fix decimal places

// console.log(balance.toFixed(2)); // 100.00 (always 2 decimal place)


// Example 2: Precision
// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // "123.9" (4 significant digits)


// Example 3: Locale formatting

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" (Indian number system grouping)


// +++++++++++++ Math Object +++++++++++++++++++++++++++++

// console.log(Math); // Built-in Math object (methods, constants)  //result- Object [Math] {}

// console.log(Math.abs(-4)); // 4 → absolute value
// console.log(Math.round(4.6)); // 5 → rounds to nearest integer
// console.log(Math.ceil(4.2)); // 5 → always rounds UP
// console.log(Math.floor(4.9)); // 4 → always rounds DOWN
// console.log(Math.min(4, 3, 6, 8)); // 3 → smallest number
// console.log(Math.max(4, 3, 6, 8)); // 8 → largest number

// Example 4: Random numbers
console.log(Math.random());
// Random decimal between 0 (inclusive) and 1 (exclusive), e.g. 0.3485

console.log((Math.random() * 10) + 1);
// Random decimal between 1 and 11 (because *10 shifts range, +1 shifts start)

console.log(Math.floor(Math.random() * 10) + 1);
// Random integer between 1 and 10 (inclusive)

// Example 5: Random number in a given range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Here range = (20 - 10 + 1) = 11
// So result is an integer between 10 and 20 (both inclusive)

