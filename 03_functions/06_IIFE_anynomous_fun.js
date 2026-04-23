console.log("Anonymous function eg:")
//you must assign an anynomous function in a variable

let greet = function(){
    console.log("hello");

    console.log("This is Anonymous function");
  }
greet();



//IIFE- IMEDIATELY INVOKED FUNCTION EXPRESSION - also called self invoking functions
//IIFE without parameter
(function f1(){
    console.log("immediately invoking");
})();

//IIFE with parameter

(function (z){  //anonymous function expression
    console.log(`square of ${z} is:` , z*z);

})(7); //argument passed here

((name)=>{  //ARROW IIFE
    console.log(`Hii ${name}`);

})("Shubham");



