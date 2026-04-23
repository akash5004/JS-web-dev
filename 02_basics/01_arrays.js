//An array is a special type of object used to store multiple values in a single variable.
//They can store any type: numbers, strings, Objects, functions, even mixed data types.

//creating arrays
const arr1=[0,1,2,3,4,5,"hi"]
const numbers= new  Array(12,7,9,21, "kuch bhi", false) //using new Array() constructor

//empty array then assign

const arr2=[]
arr2[0]="Hello";
arr2[1]="harami";
arr2[2]="World";

// console.log(arr1); // prints arr1
//console.log(numbers); //prints numbers
// console.log(arr2);

//array indexing and access

// console.log(arr1[6]) //hi
// console.log(arr2[1]) //harami

//update values
arr1[4]=10;
// console.log(arr1)
arr2[1]="cute"
// console.log(arr2)

//properties of arrays

const arr3=[23, 3.1 ,45, "a", "12ab"]
//console.log(arr3.length) //5

//array methods

//adding-push, removing -pop
arr3.push("push", 15, 7) //push one or more elements at the end
console.log(arr3);

//pop- remove one element from end
arr3.pop()
// console.log(arr3);

arr3.unshift("add_to_start" , 4, 0) //unshift- add elements to start
console.log(arr3);

arr3.shift()  //shift- removes from start
// console.log(arr3)

let ar1 = [1,2];
let ar2 = [3,4];

let ar3 = ar1.concat(ar2, 5,6,"a", "b"); //can also add extra elements after concatenation
console.log("hiiii:",ar3);

//-------------------------------
let ar4=[ar1,ar2];
console.log(ar4); //   [ [ 1, 2 ], [ 3, 4 ] ]



//spread

let x = [1, 2];
let y = [3, 4];
let z = [5, 6];

let afterSpread = [...x, ...y, ...z];
console.log(afterSpread);  //[1, 2, 3, 4, 5, 6]

//



//array.join(separator like "", "," , "-",etc)
//joins all the elements of array into a string
//by default use , comma sepARATOR

const ar=[1,2,3,4,"H","e","l","l","o"]
const ar_join =ar.join() //empty/nothing between the string produced
console.log(ar_join, ":if no argument is given then comma separates the items" , "type after using join method:" ,typeof ar_join)

console.log(ar.join("$"));


//slice(start, end)- extract portion

const nums=[23,34,2,6,78,3]

console.log(nums.slice(0,4)); //[23,34,2,6]
console.log("Array after slice:", nums); //arr remains same

//splice
console.log(nums.splice(1,4));

console.log("ARRAY AFTER SPLICE:" , nums ) //array got reduced after splice

const p=[3,4,2,5,1,0,]
console.log(p.sort());


//array.reverse
// changes original array
const r = [1,2,3,4,5 , "a" ,"b"]
r.reverse()
console.log(r)
//reverse without changing original array
const nums1 = [10, 20, 30, 40];
const reversedNums = nums.slice().reverse();

console.log("Original:", nums1);       // [10, 20, 30, 40]
console.log("Reversed:", reversedNums); // [40, 30, 20, 10]










