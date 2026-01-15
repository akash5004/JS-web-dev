"use strict"; //treat all JS as newer version
let name="Akash" //string
let greeting = "Hello, world!";

let message = `My name is ${name}.`;
let age=21       //number
let loggedIn= false  //boolean
let city="DEHRI"   //string
let state= null  //standalone value
let x;   //x is undefined

console.log(message)

console.log(typeof "Akash")
console.log(typeof name)
console.log(typeof age)
console.log(typeof 21)
console.log(typeof false)
console.log(typeof loggedIn)
console.log(typeof null)        //object- this is known as JS quirk
console.log(typeof state)       //object
console.log(typeof x)          //undefined
console.log(typeof undefined) //undefined
/*
Two types of datatypes- (i) PRIMITIVE and, (ii) Non-Primitive(reference)
PRIMITIVE:
string- "characters"
number- integers and floating point numbers
BigInt- used for numbers larger than 2^53-1
Boolean-Represents logical values true or false
Undefined- A variable declared but not assignned any value
Null- represents intentional absence of values
Symbol-unique and immutable value often used as object keys
 */

/*
Non-primitive datatypes:
OBJECT ,ARRAY,FUNCTION, DATE,egExp
*/
