let IsLoggedIn=true
if(IsLoggedIn){
    console.log("User logged in");
}
else{
    console.log("Please login to continue");
}

 //=== this checks both value and type
 
 let x="3"; //string type
 if(3 ==="3"){
    console.log("True")
 }
 else{
    console.log("Value and type donot match"); //3 is number and "3" is string so this will be printed
 }

 let price = 100;

if (price > 1000){
    console.log("I'll come back");
}
else if (price > 750){
    console.log("Thinking to buy");
}
else if (price > 500){
    console.log("Kharid hi leta hu");
}
else {
    console.log("Ab itna sasta kahi nhi milega");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow user to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
