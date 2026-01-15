//function declaration
function greet(){

    //function body- it is block of code that is executed when the functioin is called

    console.log("Hi,there!");
    console.log("HOW R U?");
                }

  greet(); //function call

  function sq(x){      //x is parameter :- no need to give type of parameter in JS
    // let sqr=x*x;
    // return sqr;
    return x*x;
  }

  function IsLoggedIn(username){
    if(username==undefined){
      console.log("please enter a valid username");
      return
    }
    return `${username} just logged into instagram`
  }

// let result = sq(6);     //6 is argument,,,// store returned value of sq(x) in the variable result
// console.log(result);    //36

console.log(sq(6));        //directly printing the function return value

console.log(IsLoggedIn("Aniket"));
console.log(IsLoggedIn());




/*
  function sq(x) {
  console.log(x * x);  // prints directly
}
sq(6); //function call

 */
