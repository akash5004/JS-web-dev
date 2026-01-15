const arr1=[2,,4,6,8,10,[3,6,9],4,8,[5,10,15,[6,12,18]]]

//console.log(arr1.flat(Infinity));  //for direct printing
const totalArr= arr1.flat(Infinity)
console.log(totalArr);
//searching
const fruits = ["apple","2" , "banana", "mango", "banana"];

// indexOf → First index of element
console.log(fruits.indexOf("banana")); // 1

// lastIndexOf → Last index
console.log(fruits.lastIndexOf("banana")); // 3

// includes → Check if exists
console.log(fruits.includes("mango")); // true
console.log(fruits.includes(2));       //false

console.log(Array.isArray("Akash")) //false
console.log(Array.from("Akash"));  //[ 'A', 'k', 'a', 's', 'h' ]


