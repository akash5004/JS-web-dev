function hof(x, func){
    const result = x * x;
    func(result); //calling the callback
}

hof(10, (value) => {
    console.log("Square is:", value);
});


//The setTimeout() method of the Window interface sets a timer
// which executes a function or specified piece of code once the timer expires/after the delay.

//syntax: setTimeout(function, delay, arg1, arg2, ...)  //delay in ms; 1000ms=1sec ; the function is actually a callback function

// setTimeout(() => {
//   console.log("Hello after 3 seconds");
// }, 3000);

// //with function reference

// function greet(){
//     console.log("kem chho mota bhaiii");
// }

// setTimeout(greet, 4000);

// //function reference with argument

// function sum(a,b){
// console.log(a+b);
// }

// setTimeout(sum, 1000, 5,10);

// setTimeout(()=>{
//     console.log(sum(15,20));
// }, 6000)


// //understand the below code

// console.log("start");

// setTimeout( function func(){
// console.log("timer 1 done");

// }, 1000 )

// setTimeout( function func(){
// console.log("timer 2 done");

// }, 0)

// console.log("end");

// for(let i=0; i<1000000000; i++){}



