// for...in loop:
// - Iterates over keys (property names) of an object
// - Mainly used for objects
// - Can be used on arrays but not recommended
// - Returns keys (or indexes in case of arrays)
// - May include inherited properties

const myObject={
    js:"javascript",
    cpp: "C++",
    py:"python",
    rb:"ruby",
    swift:"swift by apple"
};

for (const keys in myObject) {
console.log(keys);            //For in only iterates over the index(property names) of an object: Output: js cpp py rb swift
};
console.log("-------------");

//TO PRINT VALUES ON KEYS: use syntax :- object_name[iterator]
for (const keys in myObject) {
    console.log(myObject[keys]);
};

console.log("------------");


for (const keys in myObject) {
    console.log(`${keys} is filename for ${myObject[keys]}`)
}

//for in loop in arrays: usually not recommended for arrays
const arr = [10, 20, 30,"AKASH"];

for (let index in arr) {
  console.log(index);      // "0", "1", "2" ,"4"

}

for (const index in arr) {
    console.log( arr[index]); // 10 ,20, 30, AKASH
}

for (let index in arr) {
  console.log(`Index: ${index}, Value: ${arr[index]}`);
}

