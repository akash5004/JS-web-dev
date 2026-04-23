function createPromise(){
    return new Promise(function exec(resolve,reject){
//your code goes here

setTimeout( ()=>{
    console.log("timer done");
    resolve("donee")
} , 5000);

    });
}

console.log("start");

let x=createPromise();
console.log("got a new promise");

x.then(function func(){
    console.log("promise code done");

});

console.log("end");


