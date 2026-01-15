//conversion to number
console.log("--typecasting to number---");

let str = "123"; //typeof-String
let num = Number(str); // num is 123 (a number) i.e: string is typecasted to number
console.log(num);
console.log(typeof num);
console.log("---------------")


let bool = true; //typeof-Boolean
let numFromBool = Number(bool); // numFromBool is 1 i.e; bool is typecasted to number
console.log(numFromBool);
console.log(typeof numFromBool);

console.log("---------------")


let emptyStr = "";
let numFromEmpty = Number(emptyStr); // numFromEmpty is 0
console.log(numFromEmpty);
console.log(typeof numFromEmpty);

console.log("---------------")

let randomStr = "123a"; //typeof-string
let numFrom_randomStr = Number(randomStr); // numFrom_randomStr is NaN
console.log(numFrom_randomStr);


console.log("----typecasting to string-----")

let num2= 123;
let str2 = String(num2); // str2 is "123"
console.log(str2);
console.log(typeof str2);

console.log("---------------")


let bool2 = true; //typeof-bool
let strFromBool = String(bool2); // strFromBool is "true"
console.log(strFromBool);

console.log("---------------")

let undef = undefined; //typeof-undefined
let strFromUndef = String(undef); // strFromUndefined is "undefined"
console.log(strFromUndef);
console.log(typeof strFromUndef)  //string

console.log("----typecasting to bool---")

let num3 = 5;
let bool3 = Boolean(num3); // bool3 is true
console.log(bool3);

console.log("---------------")

let emptyStr2= "";
let bool4= Boolean(emptyStr2); // bool4 is false
console.log(bool4);

console.log("---------------")

let obj = {};
let bool5 = Boolean(obj); // bool5 is true
console.log(bool5);

console.log("-------------")
let n=null;
let m=Number(n);
console.log(m)
console.log(typeof m)
/*a. Conversion to a Number
You can convert a value to a number using several methods:

Number() function: This is a generic way to convert any data type to a number.

null becomes 0.

true becomes 1, and false becomes 0.

A String containing only digits will be converted to the corresponding number.

An empty String or a String with only spaces becomes 0.

Any other String (like 'hello') becomes NaN (Not a Number).

undefined becomes NaN.

 */
/*b. Conversion to a String
You can convert a value to a string using these methods:

String() function: This is a general-purpose function for converting any value to a string.

null becomes "null".

undefined becomes "undefined".

true becomes "true".

[1, 2] becomes "1,2".

{ key: 'value' } becomes "[object Object]".

 */

/*c. Conversion to a Boolean
You can convert any value to a boolean using the Boolean() function.

Boolean() function:

"Falsy" values are converted to false. These are:

0

"" (empty string)

null

undefined

NaN

false */
/*parseInt() and parseFloat(): These functions are specifically for converting strings to numbers. They are more forgiving than Number() as they stop parsing when they encounter a non-numeric character.

parseInt() parses a string and returns an integer.

parseFloat() parses a string and returns a floating-point number.*/
let str5 = "100.5";
let int = parseInt(str5); // int is 100


let str6 = "100.5px";
let float = parseFloat(str6); // float is 100.5

let str7 = "a100";
let int2 = parseInt(str7); // int2 is NaN (parsing starts from the beginning)
