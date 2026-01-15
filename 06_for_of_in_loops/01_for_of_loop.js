const numbers= [1,2,3,4,5, "Akash"]
for (const nums of numbers) {
    // console.log(nums);
}
 //these loops also works on strings

 let greetings="Hello world!"
 for (let greet of greetings) {
    // console.log(`Each char is ${greet} `);
    // console.log("each word is",greet);

 }

 //maps

 const map=new Map()
 map.set('Ak' ,"Akash")
 map.set('Ani' ,"Aniket")
 map.set('Ad' ,"Aditi")
 map.set('Sshh' ,"Shubhi")
 map.set('Sshh' ,"Shubhi") //duplicates dont console in map
 console.log(map);
for (const element of map) {
    console.log(element);   //alag alag array ki tarah print hoga

}
 for (const [short , full] of map) {
    console.log(short, "--",full);  //array ko destructure kar diya
 }


