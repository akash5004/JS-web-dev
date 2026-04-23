/* In JavaScript, every value can be evaluated as a boolean (true or false)
when used in a condition like:

if (value) {
  // runs if value is truthy
}


Truthy → behaves like true

Falsy → behaves like false

This is called type coercion.
*/

if (0) console.log("Won't run");
if ("0") console.log("Will run");

//common falsy values--
//false , 0 , -0 ,0n or BigInt Zero, "" or empty string, null , undefined, NaN
//Everything else is truthy--
//eg."false"
/* "0"
[]
{}
function () {}
Infinity
-1
*/

let arr=[]
 if(arr){
  console.log("Arrays are truthy");
 }

 if(arr.length===0){
  console.log("arr is empty");
 }


 let obj={}
 if(obj){
  console.log("Objects are truthy");
 }

 if(Object.keys(obj).length==0){
  console.log("Object is empty");
 }
