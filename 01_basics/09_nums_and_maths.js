// Example 1: Creating numbers
const score = 400
// console.log(score); // 400 (primitive number)

const balance = new Number(100) //The new keyword explicitly calls the Number constructor to create an object.
console.log("Value of balance is: ", balance);
console.log(typeof balance); //object
//new Number(100) creates a Number object (not primitive).
//Most of the time you’ll use primitive numbers, but the object form lets you access more methods.

// Convert to string

console.log(balance.toString().length); //"100" → length is 3

// Fix decimal places

console.log(balance.toFixed(2)); // 100.00 (always 2 decimal place)


// Example 2: Precision
const otherNumber = 123.8566
console.log(otherNumber.toPrecision(4)); // "123.9" (4 significant digits)


// Example 3: Locale formatting

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" (Indian number system grouping)


// +++++++++++++ Math Object +++++++++++++++++++++++++++++

// console.log(Math); // Built-in Math object (methods, constants)  //result- Object [Math] {}

console.log(Math.abs(-40.2)); // 40.2 → it gives absolute value
console.log(Math.round(14.46)); // 5 → rounds off to nearest integer
console.log(Math.ceil(14.2)); // 15 → always rounds UP
console.log(Math.floor(14.9)); // 4 → always rounds DOWN
console.log(Math.trunc(100.23)); //removes decimals


// console.log(Math.min(4, 3, 6, 8)); // 3 → smallest number
// console.log(Math.max(4, 3, 6, 8)); // 8 → largest number
console.log("Sqrt of 169 is: " ,Math.sqrt(169));
console.log(Math.pow(5,4));


// Example 4: Random numbers
console.log(Math.random()); //0 to 1 (not including 1)

console.log((Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * 10) + 1);  // generates between 0 to 1


// Example 5: Random number in a given range
function randomRange(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log(randomRange(5, 15));
