/*
try {

  // Code that may throw an error

} catch (error) {
  // Code to handle the error. block of code for adresssign errors in try

  // Statement that is executed if an exception is thrown in the try block.
} finally {

//Statements that are executed before control flow exits the try...catch...finally construct. These statements execute regardless of whether an exception was thrown or caughtthat is , finally is executed always(it is optional).

}

//runtime errors can be handled using exception handling.Eg. divison by zero, undefined var, function not found.

 */


try {
let x=undefined;
console.log(x[0]);
console.log("error here"); //does not get executed because of error in previous line, control flow jumps to catch block


} catch(error) {  //error is the argument that holds the error object thrown by try block

  console.error("error handking in catch", error);

}finally{

    console.log("finally is always executed after try-catch.");
}
console.log("the end");


