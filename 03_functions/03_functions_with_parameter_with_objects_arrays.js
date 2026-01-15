function displayMsg (x){  //declaration with parameters. here X is parameter
    console.log(x);
}
//calling functions
displayMsg(4); //4 is argument of x

//========================================

console.log("Default parameter is taken when no argument is passed.");

function user_logged_in( user_name="xyz"){
    return `${user_name} just logged in.`
}
console.log(user_logged_in());
console.log(user_logged_in("AKASH"));

let customer ={
    name:"AKASH",
    price:100,
}
function handleObject(anyobject){
return ` customer name is ${anyobject.name} and price of item is ${anyobject.price}`
}
console.log(handleObject(customer));


const newArray= [100, 400, 199,305];
function returnAnyElement(getArray){
    return getArray[2]
}
console.log(returnAnyElement(newArray));

