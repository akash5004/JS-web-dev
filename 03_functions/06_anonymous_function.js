console.log("Anonymous function eg:")
let x = function(){
    console.log("Anonymous function");
  }

x()


console.log("Immediately invoking functions:");
//whole function is wrapped in ()
(function f1(){  //named function expressions
    console.log("immediately invoking");
})();
console.log("immediately invoking with parameter ");
(function (z){
    console.log("square of ${z} is:", z*z);
    // console.log(z*z);
})(7); //argument passed here


