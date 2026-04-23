function displayMsg (x){  //declaration with parameters. here X is parameter
    console.log(x);
}
//calling functions
displayMsg("Hello"); // "Hello" string is argument for the msg function.
//======================================================================
// Default parameter is taken when no argument is passed...

function user_logged_in( user_name="xyz"){ //"xyz" is default parameter.Executed when no parameter is passed
    return `${user_name} just logged in.`
}
console.log(user_logged_in());
console.log(user_logged_in("AKASH"));

//Arrays as an argument
function sum([num1, num2,num3]){
    return num1+num2+num3;
}

const arr= [1,2,3];

const result= sum(arr);
console.log(result);



const newArray= [100, 400, 799,305];
//function print any element of
function returnAnyElement(getArray){
    return getArray[2]
}
console.log(returnAnyElement(newArray));

