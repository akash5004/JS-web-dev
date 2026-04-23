// for...of loop:
// - Iterates over values of an iterable
// - Used with arrays, strings, maps, sets
// - Does NOT work directly on plain objects
// - Returns actual values, not indexes
// - Preferred for arrays

const numbers= [1,2,3,4,5, "Akash"]
for (const nums of numbers) {
    console.log(nums);
}
 //these loops also works on strings

 let greetings="Hello world"
 for (let greet of greetings) {
    if(greet==" ") continue;
    console.log("each char is",greet);
 }

 //maps are iterable using for of loops

 const map = new Map()
 map.set('Ak' ,"Akash")
 map.set('Ani' ,"Aniket")
 map.set('Ad' ,"Aditi")
 map.set('Sshh' ,"Shubhi")
 map.set('Sshh' ,"Shubhi") //duplicates do not console in map
 console.log(map);

 //iterate using for..of loop
for (const element of map) {
    console.log(element);   //alag-alag array ki tarah print hoga

}
 for (const [shortname , fullname] of map) {
    console.log(shortname, "--",fullname);  //array ko destructure kar diya
 }

 //objects are not iterable using for of loops

 const object={
    name:"Akash",
    age:20
 }

//  for (const keyss of object) {

//     console.log(keyss);

//  }

