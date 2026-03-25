//string vs number
//In JavaScript, when a string is compared to a number, JS tries to convert the string to a number.
console.log("2" > 1);   // true
console.log("02" > 1);  // true

//null comparisons
console.log(null > 0);   // false  //*null > 0 → null becomes 0. → 0 > 0 → false
console.log(null == 0);  // false  //null == 0 → ❌ special rule: null is only equal to undefined, not to 0. → false
console.log(null >= 0);  // true   //null >= 0 → null becomes 0. → 0 >= 0 → true */


//undefined comparisons
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
/*undefined is only equal to null (with ==), not equal to 0.

When comparing undefined to a number (>, <), JS converts it to NaN.

Any comparison with NaN is false.*/

//=== strictly equality
// Loose equality (==)
console.log(5 == "5");     // true  → string "5" is converted to number 5
console.log(null == undefined); // true → special case
console.log(0 == false);   // true → false becomes 0

// Strict equality (===)
console.log(5 === "5");    // false → number vs string (types differ)
console.log(null === undefined); // false → different types
console.log(0 === false);  // false → number vs boolean





