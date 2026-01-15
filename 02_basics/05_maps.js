//creating a map
const myMap= new Map()

//adding key-valu pairs
myMap.set("Name" , "Akash")
myMap.set("age", 20)
myMap.set("course", "cse")

//getting values
console.log(myMap.get("Name"))

const val= myMap.get("age")
console.log(val);

//if key doest exist--> undefined
console.log(myMap.get("salary"));

//size
console.log(myMap.size);

//checking value exists or not
console.log(myMap.has("salary")); //false
console.log(myMap.has("age"));    //true

//looping though map
for (const [key, val] of myMap) {
    console.log(key , "->", val);
}
//delete a value
myMap.delete("course")

//final map after deleting
console.log(myMap);



