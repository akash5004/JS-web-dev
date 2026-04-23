//function declaration
function greet(){
    //function body- it is block of code that is executed when the functioin is called
    console.log("Hi there!");
    }

  greet(); //function call

  function sq1(x){
    console.log("sqr is:", x*x);
  }
  sq1(5); //function call:Output: sqr is: 25

  const result1= sq1(5); //function call:Output: sqr is: 25
  console.log("result1 is: ",result1); //gives undefined because fun sq does not return any value it only logs/prints


  function sq2(x){
    // const sqr=x*x;
    // return sqr;
    return x*x;
  }

const result2 = sq2(6);     //6 is argument.... result2 stores returned value of sq2(x) in the variable result but does not print anything..This stored value can be use in other places in future
console.log(result2);    //36
console.log(sq2(8));        //directly printing the function return value

  function IsLoggedIn(username){
    if(!username){
      console.log("please enter a valid username");
      return
    }
    else {
    return `${username} just logged into instagram`
    }
  }

console.log(IsLoggedIn("Aniket"));
console.log(IsLoggedIn());



